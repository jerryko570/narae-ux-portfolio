'use client'

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from 'motion/react'
import { useEffect, useState } from 'react'
import { useToggleMode } from '@/hooks/useToggleMode'

const MODES = ['figma', 'code'] as const
const INTERVAL = 3600
const BOX_WIDTH = 200
const BOX_HEIGHT = 64
const EXPAND_DURATION = 0.4

export default function DesignerToggle() {
  const mode = useToggleMode({ modes: MODES, interval: INTERVAL })

  return (
    <span className='relative inline-flex h-[1.3em] items-center align-middle'>
      <AnimatePresence mode='wait'>
        {mode === 'figma' ? <FigmaMode key='figma' /> : <CodeMode key='code' />}
      </AnimatePresence>
    </span>
  )
}

/* ────────── Figma 모드 ────────── */
function FigmaMode() {
  const width = useMotionValue(0)
  const widthRounded = useTransform(width, (v) => Math.round(v))
  const [displayWidth, setDisplayWidth] = useState(0)

  useEffect(() => {
    const controls = animate(width, BOX_WIDTH, {
      duration: EXPAND_DURATION,
      ease: 'easeOut',
    })
    const unsubscribe = widthRounded.on('change', (latest) => {
      setDisplayWidth(latest)
    })
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [width, widthRounded])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className='relative inline-block px-4 py-1'
    >
      {/* 박스: 너비 0 → 200px 확장 */}
      <motion.span
        style={{ width }}
        className='absolute top-0 left-0 h-full origin-left border-2 border-blue-500'
      >
        {/* 모서리 핸들 — 박스와 함께 확장 */}
        <span className='absolute -top-1.5 -left-1.5 h-2.5 w-2.5 border-2 border-blue-500 bg-white' />
        <span className='absolute -top-1.5 -right-1.5 h-2.5 w-2.5 border-2 border-blue-500 bg-white' />
        <span className='absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 border-2 border-blue-500 bg-white' />
        <span className='absolute -right-1.5 -bottom-1.5 h-2.5 w-2.5 border-2 border-blue-500 bg-white' />

        {/* 사이즈 라벨 — 숫자 실시간 증가 */}
        <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 rounded bg-blue-500 px-2 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-white'>
          {displayWidth} × {BOX_HEIGHT}
        </span>
      </motion.span>

      {/* 디자이너 텍스트 — 항상 보임 */}
      <span className='relative'>디자이너</span>
    </motion.span>
  )
}

/* ────────── Code 모드 ────────── */
function CodeMode() {
  const text = '<Designer />'
  const chars = text.split('')

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className='inline-flex items-center text-[0.90em] font-medium text-blue-500'
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{
            duration: 0.02,
            delay: i * 0.05,
          }}
          className='inline-block overflow-hidden whitespace-pre'
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}

      {/* 깜빡이는 커서 — 항상 마지막 글자 뒤에 */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        className='ml-0.5 inline-block h-[0.9em] w-1 bg-blue-500'
      />
    </motion.span>
  )
}
