<script setup lang="ts">
import type { ExperienceItem } from '~/data/portfolio'

defineProps<{ item: ExperienceItem }>()
const { el, revealed } = useReveal<HTMLDivElement>()
</script>

<template>
  <div ref="el" class="tl-item" :class="{ 'is-visible': revealed }">
    <span class="tl-dot" aria-hidden="true" />
    <div class="tl-card panel">
      <div class="tl-head">
        <div>
          <h3 class="tl-role">{{ item.role }}</h3>
          <p class="tl-org">{{ item.org }}</p>
        </div>
        <span class="tl-period">{{ item.period }}</span>
      </div>
      <ul class="tl-points">
        <li v-for="point in item.points" :key="point">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>
