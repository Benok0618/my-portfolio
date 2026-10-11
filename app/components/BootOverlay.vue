<script setup lang="ts">
const lines = [
  'init lennox.os v1.0',
  'mount modules ... ok',
  'link [rhuis] [assist] [vapethrift] ... ok',
  'handshake secure — welcome',
]

const show = ref(false)
const fading = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  if (prefersReducedMotion()) return
  try {
    if (sessionStorage.getItem('pf-booted')) return
  } catch {}
  show.value = true
  timer = setTimeout(() => {
    fading.value = true
    timer = setTimeout(() => {
      show.value = false
      try {
        sessionStorage.setItem('pf-booted', '1')
      } catch {}
    }, 700)
  }, 2300)
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="boot" :class="{ 'boot--fade': fading }" aria-hidden="true">
      <div class="boot-box">
        <div
          v-for="(line, i) in lines"
          :key="line"
          class="boot-msg"
          :style="{ animationDelay: `${i * 210}ms` }"
        >
          <span class="boot-prompt">&gt;</span> {{ line }}
        </div>
        <div class="boot-bar">
          <span class="boot-bar-fill" />
        </div>
      </div>
    </div>
  </Teleport>
</template>