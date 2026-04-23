// src/lib/getBlogPosts.ts
import matter from 'gray-matter'

const GITHUB_OWNER = 'jerryko570'
const GITHUB_REPO = 'jerryko570.github.io'
const POSTS_PATH = '_posts'
const BLOG_BASE_URL = 'https://jerryko570.github.io'

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  categories: string[]
  tags: string[]
  thumbnail: string | null
  url: string
}

type GitHubFile = {
  name: string
  path: string
  sha: string
  download_url: string
  type: 'file' | 'dir'
}

export async function getBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    const listRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${POSTS_PATH}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    )

    if (!listRes.ok) {
      throw new Error(`GitHub API error: ${listRes.status}`)
    }

    const files: GitHubFile[] = await listRes.json()

    const markdownFiles = files
      .filter((f) => f.type === 'file' && f.name.endsWith('.md'))
      .sort((a, b) => b.name.localeCompare(a.name))
      .slice(0, limit)

    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        const contentRes = await fetch(file.download_url, {
          next: { revalidate: 3600 },
        })
        const rawContent = await contentRes.text()
        const { data, content } = matter(rawContent)

        const slug = file.name
          .replace(/^\d{4}-\d{2}-\d{2}-/, '')
          .replace(/\.md$/, '')

        return {
          slug,
          title: data.title || '',
          description: data.description || extractDescription(content),
          date: formatDate(data.date || extractDateFromFilename(file.name)),
          categories: Array.isArray(data.categories) ? data.categories : [],
          tags: Array.isArray(data.tags) ? data.tags : [],
          thumbnail: extractThumbnail(data), // ← 추가
          url: `${BLOG_BASE_URL}/posts/${slug}/`,
        }
      })
    )

    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// ============== 헬퍼 ==============

/**
 * Chirpy 테마의 Front Matter에서 썸네일 경로 추출
 * 여러 가능한 필드명을 순서대로 확인
 */
function extractThumbnail(data: Record<string, unknown>): string | null {
  // Chirpy 기본: image.path
  if (data.image && typeof data.image === 'object') {
    const img = data.image as { path?: string; src?: string }
    if (img.path) return normalizeImageUrl(img.path)
    if (img.src) return normalizeImageUrl(img.src)
  }

  // 기타 가능한 필드명
  if (typeof data.image === 'string') return normalizeImageUrl(data.image)
  if (typeof data.thumbnail === 'string')
    return normalizeImageUrl(data.thumbnail)
  if (typeof data.cover === 'string') return normalizeImageUrl(data.cover)

  return null
}

/**
 * 상대 경로(/assets/img/...)를 블로그 절대 URL로 변환
 */
function normalizeImageUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  // 상대 경로면 블로그 도메인 붙임
  return `${BLOG_BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

function extractDescription(content: string): string {
  const text = content
    .replace(/^#.*/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim()
  return text.slice(0, 100).trim() + '...'
}

function extractDateFromFilename(filename: string): string {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : ''
}

function formatDate(dateInput: string | Date): string {
  const date = new Date(dateInput)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
