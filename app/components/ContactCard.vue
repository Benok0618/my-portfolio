<script setup lang="ts">
import type { ContactItem } from '~/data/portfolio'

const props = defineProps<{ contact: ContactItem }>()

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.contact.value)
    copied.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), 1600)
  } catch {
    copied.value = false
  }
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <component
    :is="contact.href ? 'a' : 'div'"
    class="contact-card panel bracket"
    :href="contact.href"
    :target="contact.href && !contact.href.startsWith('mailto') ? '_blank' : undefined"
    :rel="contact.href && !contact.href.startsWith('mailto') ? 'noopener' : undefined"
  >
    <span class="contact-icon" aria-hidden="true">
      <svg v-if="contact.icon === 'mail'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </svg>
      <svg v-else-if="contact.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M4 5c0 8 7 15 15 15l1-4-4-2-2 2a13 13 0 0 1-6-6l2-2-2-4-4 1Z" />
      </svg>
      <svg v-else-if="contact.icon === 'facebook'" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8.5V7c0-.8.5-1 1-1h2V3h-3c-2.2 0-3 1.6-3 3.4V8.5H9V12h2v9h3v-9h2.3l.7-3.5H14Z" />
      </svg>
      <svg v-else-if="contact.icon === 'github'" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3.5V21H3.5V8.5Zm6 0H13v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-3.5v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9.5V8.5Z" />
      </svg>
    </span>

    <span class="contact-meta">
      <span class="contact-label">{{ contact.label }}</span>
      <span class="contact-value">{{ contact.value }}</span>
    </span>

    <button
      v-if="contact.copy"
      class="copy-btn"
      type="button"
      :aria-label="copied ? `${contact.label} copied` : `Copy ${contact.label}`"
      @click.prevent="copy"
    >
      <svg v-if="!copied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h9" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m5 13 4 4 10-10" />
      </svg>
    </button>
  </component>
</template>
