// 창고를 만들고, 담길 데이터 타입 지정, 초기값 null

// context는 브라우저에서만 작동함
'use client'

// 창고를 만드는 도구를 react에서 임포트함
import { createContext } from 'react'

import { NavigationContextType } from './type'

// 나중에 이 이름으로 창고에 접근 가능
// 창고에 생성하는 함수는 createContext이고 <> 안에는 창고에 담길 수 있는 타입
// null 초기값 설정
export const NavigationContext = createContext<NavigationContextType | null>(
  null
)
