import { useEffect, useRef } from 'react'

/**
 * 의존성 값이 바뀔 때마다 ref가 가리키는 요소로 자동 스크롤
 * @param dep 감시할 값 (보통 messages 배열)
 */
export function useAutoScroll<T>(dep: T) {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [dep])

  return endRef
}
