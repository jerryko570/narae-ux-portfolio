import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '이나래 포트폴리오',
  description: '프론트엔드로 디자이너하는 이나래입니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: 'Pretendard, sans-serif' }}>{children}</body>
    </html>
  )
}
