// useContext로 창고에서 데이터를 꺼내오고 꺼낸 값이 null이면 에러를 던진다
// null이 아니면 데이터를 반환한다

'use client'

// 창고에서 꺼내 쓰는 도구를 가져옴
import { useContext } from 'react'

// 만들었던 창고를 가져옴
import { NavigationContext } from './NavigationContext'

export function useNavigation() {
  // NavigationContext 창고에 접근해서 안에 있는 것들을 꺼내옴
  // 결과가 context에 담김
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('NavigationProvider 안에서 사용해주세요')
  }

  return context
}
