import { prefersReducedMotion } from './useReveal'

export function useTilt(max = 6) {
  const rx = ref(0)
  const ry = ref(0)
  let rect: DOMRect | null = null

  const onEnter = (e: MouseEvent) => {
    rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  }

  const onMove = (e: MouseEvent) => {
    if (prefersReducedMotion()) return
    const target = e.currentTarget as HTMLElement
    if (!rect) rect = target.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    ry.value = (px - 0.5) * 2 * max
    rx.value = (0.5 - py) * 2 * max
  }

  const onLeave = () => {
    rx.value = 0
    ry.value = 0
    rect = null
  }

  const style = computed(() => ({
    '--tilt-x': `${rx.value.toFixed(2)}deg`,
    '--tilt-y': `${ry.value.toFixed(2)}deg`,
  }))

  return { onEnter, onMove, onLeave, style }
}
