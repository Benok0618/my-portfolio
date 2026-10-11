<script setup lang="ts">
import { profile } from '~/data/portfolio'

const loaded = ref(false)
const photoSrc = useRuntimeConfig().public.profilePhoto as string
const hasPhoto = Boolean(photoSrc)
const photoOk = ref(hasPhoto)

const { text: nameText } = useTypewriter(profile.name, { startDelay: 650, typeSpeed: 72 })
const { text: roleText } = useTypewriter(profile.roles, {
  startDelay: 2400,
  typeSpeed: 42,
  deleteSpeed: 24,
  holdTime: 1500,
  loop: true,
})

const orbit = [
  { label: 'Laravel', a: 0 },
  { label: 'Vue', a: 60 },
  { label: 'Inertia', a: 120 },
  { label: 'PHP', a: 180 },
  { label: 'MySQL', a: 240 },
  { label: 'Python', a: 300 },
]

const particles = [
  { left: '8%', top: '22%', s: '3px', dur: '11s', delay: '0s', dx: '26px', dy: '-30px' },
  { left: '18%', top: '74%', s: '4px', dur: '13s', delay: '.8s', dx: '-22px', dy: '-24px' },
  { left: '28%', top: '38%', s: '2px', dur: '9s', delay: '1.6s', dx: '18px', dy: '26px' },
  { left: '38%', top: '82%', s: '3px', dur: '14s', delay: '.4s', dx: '-28px', dy: '-18px' },
  { left: '48%', top: '16%', s: '2px', dur: '10s', delay: '2.1s', dx: '22px', dy: '24px' },
  { left: '58%', top: '66%', s: '4px', dur: '12s', delay: '1.1s', dx: '-24px', dy: '-28px' },
  { left: '68%', top: '28%', s: '3px', dur: '15s', delay: '.2s', dx: '30px', dy: '-22px' },
  { left: '78%', top: '72%', s: '2px', dur: '9.5s', delay: '1.9s', dx: '-20px', dy: '28px' },
  { left: '88%', top: '40%', s: '3px', dur: '13.5s', delay: '.6s', dx: '24px', dy: '20px' },
  { left: '12%', top: '54%', s: '2px', dur: '11.5s', delay: '2.6s', dx: '-26px', dy: '22px' },
  { left: '32%', top: '60%', s: '3px', dur: '12.5s', delay: '1.4s', dx: '20px', dy: '-26px' },
  { left: '72%', top: '50%', s: '3px', dur: '14.5s', delay: '.9s', dx: '-30px', dy: '18px' },
  { left: '52%', top: '88%', s: '2px', dur: '10.5s', delay: '2.3s', dx: '24px', dy: '-24px' },
  { left: '92%', top: '14%', s: '2px', dur: '12s', delay: '1.7s', dx: '-18px', dy: '26px' },
]

onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true
  })
})
</script>

<template>
  <section id="home" class="hero" :class="{ 'is-loaded': loaded }">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid" />
      <span
        v-for="(p, i) in particles"
        :key="i"
        class="particle"
        :style="{
          left: p.left,
          top: p.top,
          '--s': p.s,
          '--dur': p.dur,
          '--delay': p.delay,
          '--dx': p.dx,
          '--dy': p.dy,
        }"
      />
    </div>

    <div class="shell hero-inner">
      <div class="hero-copy">
        <span class="status-chip">
          <span class="status-dot" aria-hidden="true" />
          {{ profile.status }}
        </span>

        <h1 class="sr-only">{{ profile.name }} Ã¢â‚¬â€ Full-stack Developer</h1>
        <div class="hero-name" aria-hidden="true">
          <span>{{ nameText }}</span><span class="type-cursor" />
        </div>

        <p class="hero-role" aria-hidden="true">
          <span class="prompt">&gt;</span>
          <span>{{ roleText }}</span><span class="type-cursor" />
        </p>

        <p class="hero-bio">{{ profile.bio }}</p>

        <div class="hero-actions">
          <a class="btn btn--primary" href="#projects">View Projects</a>
          <a class="btn btn--ghost" href="#contact">Contact Me</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="avatar-wrap">
          <div class="avatar-glow" aria-hidden="true" />

          <svg class="avatar-ring" viewBox="0 0 240 240" aria-hidden="true">
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#5eead4" />
                <stop offset="50%" stop-color="#8b5cf6" />
                <stop offset="100%" stop-color="#5eead4" />
              </linearGradient>
            </defs>
            <circle class="ring-track" cx="120" cy="120" r="114" />
            <circle class="ring-arc" cx="120" cy="120" r="114" />
          </svg>

          <div class="avatar-frame">
            <span v-show="!photoOk" class="avatar-initials" aria-hidden="true">{{ profile.initials }}</span>
            <img
              v-if="hasPhoto"
              v-show="photoOk"
              :src="photoSrc"
              alt="Portrait of Lennox Luis OmaÃƒÂ±a"
              width="320"
              height="320"
              @load="photoOk = true"
              @error="photoOk = false"
            />
          </div>

          <div class="orbit" aria-hidden="true">
            <div class="orbit-rotor">
              <span
                v-for="badge in orbit"
                :key="badge.label"
                class="orbit-badge"
                :style="{ '--a': `${badge.a}deg` }"
              >
                <span class="orbit-badge-inner">{{ badge.label }}</span>
              </span>
            </div>
          </div>

          <div class="snippet panel bracket" aria-hidden="true" style="display:none">
            <div><span class="k">const</span> me <span class="s">=</span> {</div>
            <div>&nbsp;&nbsp;role<span class="s">:</span> <span class="s">'full-stack dev'</span>,</div>
            <div>&nbsp;&nbsp;builds<span class="s">:</span> [<span class="s">'health'</span>, <span class="s">'gov'</span>],</div>
            <div>&nbsp;&nbsp;stack<span class="s">:</span> <span class="s">'Laravel · Vue'</span>,</div>
            <div>};</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
