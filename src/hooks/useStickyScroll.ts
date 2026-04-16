'use client'

import { useEffect, useRef, useState } from 'react'

export function useStickyScroll(totalSteps: number) {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()

      // 박스 높이가 화면이랑 같거나 작으면 스크롤 불가 → 0으로 고정
      const scrollableHeight = height - window.innerHeight
      if (scrollableHeight <= 0) {
        setActiveStep(0)
        return
      }

      const scrollProgress = -top / scrollableHeight
      const step = Math.floor(scrollProgress * totalSteps)
      const clampedStep = Math.max(0, Math.min(totalSteps - 1, step))

      setActiveStep(clampedStep)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // ← 페이지 진입 시 초기 위치 바로 계산

    return () => window.removeEventListener('scroll', handleScroll)
  }, [totalSteps])

  return { activeStep, containerRef }
}
