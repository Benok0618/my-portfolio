const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useReveal<T extends HTMLElement = HTMLElement>(options?: {
  threshold?: number
  once?: boolean
}) {
  const el = ref<T | null>(null)
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      revealed.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealed.value = true
            if (options?.once !== false) observer?.disconnect()
          } else if (options?.once === false) {
            revealed.value = false
          }
        }
      },
      { threshold: options?.threshold ?? 0.16, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { el, revealed }
}

export { prefersReducedMotion }
