export type Persona =
  | 'hr'
  | 'design_lead'
  | 'startup_ceo'
  | 'pm_developer'
  | 'general'

export type MessageRole = 'user' | 'assistant'

// 메시지 한 개 (API + DB 모두 호환)
export interface ChatMessage {
  id?: string // Supabase에서 부여될 ID
  role: MessageRole
  content: string
  isJdAnalysis?: boolean // JD 분석 응답이면 true
  createdAt?: string // ISO timestamp
}

// /api/chat 요청 body 형식
export interface ChatRequest {
  messages: ChatMessage[]
  sessionId: string
  persona?: Persona
}

// 서버에서 대화 세션 만들 때 사용
export interface ConversationContext {
  sessionId: string
  persona?: Persona
  ipHash?: string
  userAgent?: string
}
