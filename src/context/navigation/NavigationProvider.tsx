// useState로 실제 데이터 저장
// Provider로 감싸서 하위 컴포넌트에 공유

'use client'
import { useState } from 'react'
import { SectionId } from './type'
import { NavigationContext } from './NavigationContext'

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode // React에서 렌더할 수 있는 모든 것
}) {
  const [activeMenu, setActiveMenu] = useState<SectionId>('home')
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)

  // {children}에 들어오는 컴포넌트들이 창고 접근 가능
  // provider로 감싸진 모든 컴포넌트가 value에 있는 값을 꺼내 쓸 수 있음
  return (
    <NavigationContext.Provider
      value={{ activeMenu, setActiveMenu, isChatOpen, setIsChatOpen }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
