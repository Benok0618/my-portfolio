<script setup lang="ts">
interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  violet: boolean
}

interface Packet {
  from: number
  to: number
  t: number
  speed: number
}

const canvas = ref<HTMLCanvasElement | null>(null)

const LINK = 150
let ctx: CanvasRenderingContext2D | null = null
let nodes: Node[] = []
let packets: Packet[] = []
let raf = 0
let running = false
let last = 0
let observer: ResizeObserver | null = null

function newPacket(): Packet {
  const a = Math.floor(Math.random() * nodes.length)
  let b = Math.floor(Math.random() * nodes.length)
  if (b === a) b = (b + 1) % nodes.length
  return { from: a, to: b, t: Math.random(), speed: 0.005 + Math.random() * 0.009 }
}

function seed(w: number, h: number) {
  const count = Math.max(26, Math.min(80, Math.round((w * h) / 24000)))
  nodes = Array.from({ length: count }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.34,
    vy: (Math.random() - 0.5) * 0.34,
    r: Math.random() * 1.4 + 0.8,
    violet: i % 4 === 0,
  }))
  packets = Array.from({ length: Math.max(3, Math.min(6, Math.round(count / 12))) }, newPacket)
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = window.innerWidth
  const h = window.innerHeight
  el.width = Math.floor(w * dpr)
  el.height = Math.floor(h * dpr)
  el.style.width = `${w}px`
  el.style.height = `${h}px`
  ctx = el.getContext('2d')
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
  seed(w, h)
}

function draw() {
  if (!ctx) return
  const w = window.innerWidth
  const h = window.innerHeight
  ctx.clearRect(0, 0, w, h)

  const links: [Node, Node, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i]!
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j]!
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > LINK) continue
      links.push([a, b, (1 - dist / LINK) * 0.26])
    }
  }

  for (const [a, b, alpha] of links) {
    ctx.strokeStyle = `rgba(94, 234, 212, ${alpha})`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke()
  }

  for (const p of packets) {
    const a = nodes[p.from]!
    const b = nodes[p.to]!
    const x = a.x + (b.x - a.x) * p.t
    const y = a.y + (b.y - a.y) * p.t
    ctx.fillStyle = 'rgba(167, 139, 250, 0.3)'
    ctx.beginPath()
    ctx.arc(x, y, 4.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(216, 180, 254, 0.95)'
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.fill()
  }

  for (const n of nodes) {
    ctx.fillStyle = n.violet ? 'rgba(167, 139, 250, 0.7)' : 'rgba(94, 234, 212, 0.65)'
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fill()
  }
}

function step(ts: number) {
  const dt = Math.min(0.05, (ts - last) / 1000 || 0.016)
  last = ts
  const w = window.innerWidth
  const h = window.innerHeight
  for (const n of nodes) {
    n.x += n.vx * dt * 60
    n.y += n.vy * dt * 60
    if (n.x < -20) n.x = w + 20
    else if (n.x > w + 20) n.x = -20
    if (n.y < -20) n.y = h + 20
    else if (n.y > h + 20) n.y = -20
  }
  for (let i = 0; i < packets.length; i++) {
    const p = packets[i]!
    p.t += p.speed * dt * 60
    if (p.t >= 1) packets[i] = newPacket()
  }
  draw()
  raf = requestAnimationFrame(step)
}

function start() {
  if (running || prefersReducedMotion()) return
  running = true
  last = 0
  raf = requestAnimationFrame(step)
}

function stop() {
  running = false
  cancelAnimationFrame(raf)
}

function onVisibility() {
  if (document.hidden) stop()
  else start()
}

onMounted(() => {
  sizeCanvas()
  if (prefersReducedMotion()) draw()
  else start()
  observer = new ResizeObserver(() => {
    sizeCanvas()
    if (prefersReducedMotion()) draw()
  })
  observer.observe(document.documentElement)
  document.addEventListener('visibilitychange', onVisibility)
})

onBeforeUnmount(() => {
  stop()
  observer?.disconnect()
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <canvas ref="canvas" class="tech-bg" aria-hidden="true" />
</template>