<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number
    label: string
    suffix?: string
    decimals?: number
    delay?: number
  }>(),
  { suffix: '', decimals: 0, delay: 0 },
)

const { el, revealed } = useReveal<HTMLDivElement>()
const { display, run } = useCountUp(props.value, { decimals: props.decimals })

watch(revealed, (v) => {
  if (v) setTimeout(run, props.delay)
})
</script>

<template>
  <div ref="el" class="stat panel bracket">
    <span class="stat-num">{{ display }}{{ suffix }}</span>
    <span class="stat-label">{{ label }}</span>
  </div>
</template>
