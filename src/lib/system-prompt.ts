import { SYSTEM_PROMPT } from '@/data/naraebot/systemPrompt'
import { KNOWLEDGE_BASE } from '@/data/naraebot/knowledgeBase'
import { JD_LOGIC } from '@/data/naraebot/jdLogic'

export async function loadAllPrompts() {
  return {
    systemPrompt: SYSTEM_PROMPT,
    knowledgeBase: KNOWLEDGE_BASE,
    jdAnalysisLogic: JD_LOGIC,
  }
}
