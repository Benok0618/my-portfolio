<script setup lang="ts">
import { prefersReducedMotion } from '~/composables/useReveal'

const props = defineProps<{
  title?: string
  command: string
  items: { k: string; v: string }[]
}>()

const shown = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (prefersReducedMotion()) {
    shown.value = props.items.length
    return
  }
  timer = setInterval(() => {
    shown.value += 1
    if (shown.value >= props.items.length && timer) {
      clearInterval(timer)
      timer = null
    }
  }, 220)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="terminal panel bracket panel--glow">
    <div class="terminal-bar">
      <span class="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
      <span class="terminal-title">{{ title || 'bash — about' }}</span>
    </div>
    <div class="terminal-body">
      <p class="terminal-cmd">{{ command }}</p>
      <div
        v-for="(item, i) in items"
        :key="item.k"
        class="terminal-line"
        :class="{ 'is-shown': i < shown }"
      >
        <span class="terminal-key">{{ item.k }}</span>
        <span class="terminal-val">{{ item.v }}</span>
      </div>
    </div>
  </div>
</template>
