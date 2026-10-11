<script setup lang="ts">
import type { SkillGroupData } from '~/data/portfolio'

defineProps<{ group: SkillGroupData }>()
</script>

<template>
  <div class="skill-group panel">
    <h3>{{ group.title }} <span class="note">/ {{ group.note }}</span></h3>
    <div class="chip-list">
      <span v-for="skill in group.skills" :key="skill" class="chip">{{ skill }}</span>
    </div>
  </div>
</template>
