/**
 * JD 입력 감지 로직 (jd-analysis-logic-v1.md §2 구현)
 */

const EXPLICIT_TRIGGERS = [
  'JD 분석',
  'jd 분석',
  'JD분석',
  '공고 분석',
  '공고분석',
  '이 공고',
  '공고 봐',
  '분석해줘',
  '맞을까',
  '적합한지',
  '핏한지',
  'Job Description',
  'job description',
]

const JD_SIGNAL_KEYWORDS = [
  '자격 요건',
  '자격요건',
  '지원 자격',
  '필수 조건',
  '필수 역량',
  '담당 업무',
  '주요 업무',
  '담당업무',
  '주요업무',
  '우대 사항',
  '우대사항',
  'Preferred',
  'preferred',
  '복리후생',
  '근무 조건',
  '근무조건',
  '회사 소개',
  'About us',
  'about us',
  'Requirements',
  'requirements',
  'Responsibilities',
  'responsibilities',
]

const YEARS_PATTERN = /(\d+)\s*년\s*(이상|차|이내)/

export function isJdInput(text: string): boolean {
  // A. 명시적 트리거
  const hasExplicit = EXPLICIT_TRIGGERS.some((t) => text.includes(t))
  if (hasExplicit) return true

  // B. 자동 감지: 150자 이상 + 시그널 3개 이상
  if (text.length < 150) return false

  const signalCount = JD_SIGNAL_KEYWORDS.filter((k) => text.includes(k)).length
  const hasYearsPattern = YEARS_PATTERN.test(text)

  return signalCount + (hasYearsPattern ? 1 : 0) >= 3
}
