import { useEffect } from 'react'

/**
 * ESC 키 눌렀을 때 핸들러를 실행하는 훅
 * @param handler ESC 눌렀을 때 실행할 함수
 * @param enabled false면 리스너 비활성화 (기본 true)
 */
export function useEscapeKey(handler: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handler()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handler, enabled])
}
