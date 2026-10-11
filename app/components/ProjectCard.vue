<script setup lang="ts">
import type { MoreProject } from '~/data/portfolio'

defineProps<{ project: MoreProject }>()
</script>

<template>
  <article class="mini-card panel">
    <h4>{{ project.title }}</h4>
    <p>{{ project.detail }}</p>
    <div class="chip-list">
      <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
    </div>
  </article>
</template>
