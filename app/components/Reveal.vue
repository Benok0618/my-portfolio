<script setup lang="ts">
withDefaults(defineProps<{ delay?: number; as?: string }>(), { delay: 0, as: 'div' })
const { el, revealed } = useReveal<HTMLElement>()
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="reveal"
    :class="{ 'is-visible': revealed }"
    :style="{ '--reveal-delay': `${delay}ms` }"
  >
    <slot />
  </component>
</template>
