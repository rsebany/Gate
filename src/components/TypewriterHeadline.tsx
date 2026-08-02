import { useEffect, useState } from 'react'

type Props = {
  text: string
  reducedMotion: boolean
  className?: string
}

export function TypewriterHeadline({ text, reducedMotion, className }: Props) {
  const [shown, setShown] = useState(() => (reducedMotion ? text : ''))
  const [prev, setPrev] = useState({ text, reducedMotion })

  if (prev.text !== text || prev.reducedMotion !== reducedMotion) {
    setPrev({ text, reducedMotion })
    setShown(reducedMotion ? text : '')
  }

  useEffect(() => {
    if (reducedMotion) return
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) window.clearInterval(id)
    }, 32)
    return () => {
      window.clearInterval(id)
    }
  }, [text, reducedMotion])

  return <span className={className}>{shown}</span>
}
