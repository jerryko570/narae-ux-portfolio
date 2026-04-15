'use client'

import { useEffect, useRef, useState } from 'react'

export function useStickyScroll(totalSteps: number) {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      // 컨테이너의 위치와 총 높이
      const { top, height } = containerRef.current.getBoundingClientRect()

      // 스크롤이 컨테이너 안에 얼마나 들어왔는지 (0 ~ 1)
      const scrollProgress = -top / (height - window.innerHeight)

      // 몇 번째 구간인지 계산
      const step = Math.floor(scrollProgress * totalSteps)
      const clampedStep = Math.max(0, Math.min(totalSteps - 1, step))

      setActiveStep(clampedStep)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [totalSteps])

  return { activeStep, containerRef }
}
