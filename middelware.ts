import { NextRequest, NextResponse } from 'next/server'

// 메모리 기반 rate limiter (Vercel은 인스턴스마다 별도)
// 본격적이면 Upstash Redis 사용 권장
const requests = new Map<string, number[]>()
const WINDOW_MS = 60 * 60 * 1000 // 1시간
const MAX_PER_HOUR = parseInt(process.env.RATE_LIMIT_PER_HOUR || '30')

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname !== '/api/chat') return NextResponse.next()

  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()
  const userRequests = (requests.get(ip) || []).filter(
    (t) => now - t < WINDOW_MS
  )

  if (userRequests.length >= MAX_PER_HOUR) {
    return NextResponse.json(
      { error: '요청이 너무 많아요. 잠시 후 다시 시도해 주세요.' },
      { status: 429 }
    )
  }

  userRequests.push(now)
  requests.set(ip, userRequests)
  return NextResponse.next()
}

export const config = {
  matcher: '/api/chat',
}
