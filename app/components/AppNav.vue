<script setup lang="ts">
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const active = ref('home')
const open = ref(false)
const progress = ref(0)

let observer: IntersectionObserver | null = null

const onScroll = () => {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  progress.value = max > 0 ? Math.min(1, doc.scrollTop / max) : 0
}

const close = () => {
  open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  if (typeof IntersectionObserver !== 'undefined') {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((s): s is HTMLElement => Boolean(s))

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer?.observe(s))
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header class="nav">
    <div class="shell nav-inner">
      <a class="brand" href="#home" @click="close">
        <span class="brand-mark" aria-hidden="true">LO</span>
        <span class="brand-text"><b>lennox</b>.dev</span>
      </a>

      <nav aria-label="Primary">
        <ul id="primary-nav" class="nav-links" :class="{ 'is-open': open }">
          <li v-for="link in links" :key="link.id">
            <a
              class="nav-link"
              :class="{ 'is-active': active === link.id }"
              :href="`#${link.id}`"
              :aria-current="active === link.id ? 'true' : undefined"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="primary-nav"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span aria-hidden="true" />
      </button>
    </div>

    <div class="progress-track" aria-hidden="true">
      <div class="progress-bar" :style="{ width: `${progress * 100}%` }" />
    </div>
  </header>
</template>
