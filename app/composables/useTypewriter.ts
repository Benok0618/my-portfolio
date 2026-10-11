import { prefersReducedMotion } from './useReveal'

export function useTypewriter(
  phrases: string | string[],
  options?: {
    typeSpeed?: number
    deleteSpeed?: number
    holdTime?: number
    startDelay?: number
    loop?: boolean
  },
) {
  const list = Array.isArray(phrases) ? phrases : [phrases]
  const text = ref('')
  const finished = ref(false)
  let timers: ReturnType<typeof setTimeout>[] = []
  let stopped = false

  const typeSpeed = options?.typeSpeed ?? 55
  const deleteSpeed = options?.deleteSpeed ?? 28
  const holdTime = options?.holdTime ?? 1600
  const loop = options?.loop ?? list.length > 1

  const clear = () => {
    for (const t of timers) clearTimeout(t)
    timers = []
  }

  const later = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms)
    timers.push(t)
  }

  const typePhrase = (phrase: string, index: number, i: number) => {
    if (stopped) return
    if (i <= phrase.length) {
      text.value = phrase.slice(0, i)
      later(() => typePhrase(phrase, index, i + 1), typeSpeed)
    } else {
      const isLast = index === list.length - 1
      if (!loop && isLast) {
        finished.value = true
        return
      }
      later(() => erasePhrase(phrase, index), holdTime)
    }
  }

  const erasePhrase = (phrase: string, index: number, i = phrase.length) => {
    if (stopped) return
    if (i >= 0) {
      text.value = phrase.slice(0, i)
      later(() => erasePhrase(phrase, index, i - 1), deleteSpeed)
    } else {
      typePhrase(list[(index + 1) % list.length]!, (index + 1) % list.length, 0)
    }
  }

  const start = () => {
    if (prefersReducedMotion()) {
      text.value = list[0] ?? ''
      finished.value = true
      return
    }
    later(() => typePhrase(list[0]!, 0, 0), options?.startDelay ?? 0)
  }

  onMounted(start)

  onBeforeUnmount(() => {
    stopped = true
    clear()
  })

  return { text, finished, start }
}
