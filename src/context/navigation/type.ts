// 창고에 담길 데이터의 타입을 설계

// union 타입: 리터럴 타입을 |로 묶어서 그룹핑
export type SectionId = 'home' | 'smols' | 'curi' | 'about'

// 사용자가 클릭하면 setActiveMenu, setIsChatOpen 호출이 됨
// 창고 안 값이 변경되어 헤더가 그 변화를 감지하여 UI 업데이트
export type NavigationContenxtType = {
  activeMenu: SectionId
  setActiveMenu: (section: SectionId) => void
  isChatOpen: boolean
  setIsChatOpen: (open: boolean) => void
}
