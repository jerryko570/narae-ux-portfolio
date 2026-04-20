import { useState } from 'react'
import { useInterval } from './useInterval'

type UseToggleModeOptions<T> = {
  modes: readonly [T, T]
  interval: number
}

export function useToggleMode<T>({ modes, interval }: UseToggleModeOptions<T>) {
  const [mode, setMode] = useState<T>(modes[0])

  useInterval(() => {
    setMode((prev) => (prev === modes[0] ? modes[1] : modes[0]))
  }, interval)

  return mode
}
