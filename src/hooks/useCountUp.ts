import { useEffect, useState } from 'react'

export function useCountUp(target: number, started: boolean, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, started, duration])

  return count
}

// "15%" → { num: 15, suffix: "%" }
export function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  return match
    ? { num: parseInt(match[1]), suffix: match[2] }
    : { num: 0, suffix: value }
}
