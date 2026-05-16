import { NextRequest } from 'next/server'
import { saveFeedback } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { messageId, rating, comment } = await req.json()

    if (!messageId || ![1, -1].includes(rating)) {
      return Response.json({ error: 'Invalid input' }, { status: 400 })
    }

    await saveFeedback(messageId, rating, comment)
    return Response.json({ success: true })
  } catch (error) {
    console.error('Feedback error:', error)
    return Response.json({ error: 'Failed to save' }, { status: 500 })
  }
}
