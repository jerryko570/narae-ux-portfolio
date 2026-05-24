'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigation } from '@/context/navigation'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useChat } from './useChat'
import Text from '@/components/ui/Text/Text'
import MessageList from './MessageList'
import InputBox from './InputBox'

export default function ChatModal() {
  const { isChatOpen, setIsChatOpen } = useNavigation()
  const close = () => setIsChatOpen(false)

  useEscapeKey(close, isChatOpen)
  useLockBodyScroll(isChatOpen)

  const {
    messages,
    input,
    setInput,
    isStreaming,
    inputRef,
    messagesEndRef,
    resetChat,
    handleSend,
  } = useChat(isChatOpen)

  return (
    <AnimatePresence>
      {isChatOpen && (
        // 배경(딤): 페이드 인/아웃
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-white/5 px-4'
          onClick={close}
          role='dialog'
          aria-modal='true'
          aria-labelledby='chat-modal-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* 모달 본체: 페이드 + 살짝 확대 + 아래에서 올라옴 */}
          <motion.div
            className='relative w-full max-w-200 rounded-4xl bg-gray-900 p-8'
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {/* 헤더 */}
            <div className='flex items-center justify-between'>
              <button
                type='button'
                onClick={resetChat}
                className='flex cursor-pointer items-center gap-4'
                aria-label='나래봇 처음 화면으로'
              >
                <Text as='h2'> 🤖</Text>
                <Text as='h3' className='text-2xl font-medium text-white'>
                  <span id='chat-modal-title'>나래봇</span>
                </Text>
              </button>
              <button
                onClick={close}
                className='text-white hover:opacity-70'
                aria-label='나래봇 닫기'
              >
                <Image
                  src='/icons/close_btn.svg'
                  alt=''
                  width={44}
                  height={44}
                  className='cursor-pointer'
                />
              </button>
            </div>

            {/* 채팅 영역 */}
            <div className='mt-6 flex h-160 flex-col overflow-hidden rounded-md bg-white'>
              <div className='flex-1 overflow-y-auto p-8'>
                <MessageList
                  messages={messages}
                  messagesEndRef={messagesEndRef}
                />
              </div>
              <InputBox
                value={input}
                onChange={setInput}
                onSend={handleSend}
                inputRef={inputRef}
                disabled={isStreaming}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
