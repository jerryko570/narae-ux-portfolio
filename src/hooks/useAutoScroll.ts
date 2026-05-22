import { useEffect, useRef } from 'react'

/**
 * dep이 바뀌거나 모달이 열릴 때 ref 요소로 자동 스크롤
 * @param dep    감시할 값 (보통 messages 배열)
 * @param isOpen 컨테이너(모달)가 열려 있는지
 */
export function useAutoScroll<T>(dep: T, isOpen = true) {
  const endRef = useRef<HTMLDivElement>(null)

  // 메시지가 바뀔 때: 부드럽게 맨 아래로
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [dep])

  // 모달이 열릴 때: 애니메이션 없이 즉시 맨 아래로
  useEffect(() => {
    if (!isOpen) return
    const id = requestAnimationFrame(() => {
      endRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' })
    })
    return () => cancelAnimationFrame(id)
  }, [isOpen])

  return endRef
}
