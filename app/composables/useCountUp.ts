import { prefersReducedMotion } from './useReveal'

export function useCountUp(
  target: number,
  options?: { duration?: number; decimals?: number },
) {
  const value = ref(0)
  const duration = options?.duration ?? 1500
  const decimals = options?.decimals ?? 0
  let raf = 0
  let started = false

  const display = computed(() => value.value.toFixed(decimals))

  const run = () => {
    if (started) return
    started = true
    if (prefersReducedMotion()) {
      value.value = target
      return
    }
    const startTime = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      value.value = target * eased
      if (p < 1) raf = requestAnimationFrame(tick)
      else value.value = target
    }
    raf = requestAnimationFrame(tick)
  }

  onBeforeUnmount(() => cancelAnimationFrame(raf))

  return { value, display, run }
}
