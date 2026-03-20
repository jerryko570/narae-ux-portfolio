import { useState, useEffect } from 'react'

type UseWindowWidthOptions = {
  breakpoint?: number
  fadeStart?: number
}

type WindowWidthResult = {
  isVisible: boolean
  opacity: number
  imageWidth: string
  width: number
}

export function useWindowWidth({
  breakpoint = 1200,
  fadeStart = 1280,
}: UseWindowWidthOptions = {}): WindowWidthResult {
  const [width, setWidth] = useState(1280)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isVisible = width >= breakpoint
  const opacity = Math.min(
    1,
    Math.max(0, (width - breakpoint) / (fadeStart - breakpoint))
  )
  const imageWidth = `${Math.min(850, Math.max(600, width * 0.4))}px`

  return { isVisible, opacity, imageWidth, width }
}
