'use client'

import { useState, useEffect } from 'react'

export default function AutoUploadBadge() {
  const [countDown, setCountDown] = useState('2일 5시간 뒤 자동 업로드')

  useEffect(() => {
    setTimeout(() => {
      setCountDown('울랄라')
    }, 1000)
  }, [])

  return (
    <div>
      <p>{countDown}</p>
    </div>
  )
}
