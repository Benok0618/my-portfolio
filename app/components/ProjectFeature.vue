<script setup lang="ts">
interface ProjectView {
  title: string
  short: string
  summary: string
  status: string
  period: string
  role: string
  client: string
  tech: string[]
  features: string[]
  link?: string
  repo?: string
  accent: string
}

defineProps<{ project: ProjectView; index: number; reversed?: boolean }>()

const { onEnter, onMove, onLeave, style } = useTilt(6)

const bars = [42, 66, 50, 80, 58, 90, 72]
const metrics = ['1,024', '98%', '256']
</script>

<template>
  <article class="project-feature panel bracket" :class="{ 'is-reversed': reversed }">
    <div class="pf-copy">
      <p class="pf-index">PROJECT / 0{{ index }}</p>
      <h3 class="pf-title">{{ project.title }}</h3>
      <p class="pf-sub">{{ project.short }}</p>

      <div class="pf-meta">
        <span><b>Status</b> · {{ project.status }}</span>
        <span><b>Period</b> · {{ project.period }}</span>
        <span><b>Role</b> · {{ project.role }}</span>
        <span v-if="project.client"><b>For</b> · {{ project.client }}</span>
      </div>

      <p class="pf-summary">{{ project.summary }}</p>

      <ul class="pf-features">
        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
      </ul>

      <div class="chip-list" style="margin-top: 1.2rem">
        <span v-for="tech in project.tech" :key="tech" class="chip">{{ tech }}</span>
      </div>

      <div class="pf-links">
        <a v-if="project.link" class="btn btn--primary" :href="project.link" target="_blank" rel="noopener">
          View live
        </a>
        <a v-if="project.repo" class="btn btn--ghost" :href="project.repo" target="_blank" rel="noopener">
          Source ↗
        </a>
        <span v-if="!project.link && !project.repo" class="pf-note">Internal system — no public link</span>
      </div>
    </div>

    <div class="pf-media">
      <div
        class="mockup"
        :data-accent="project.accent"
        :style="style"
        @mouseenter="onEnter"
        @mousemove="onMove"
        @mouseleave="onLeave"
        aria-hidden="true"
      >
        <div class="mockup-top">
          <span class="dots"><i /><i /><i /></span>
          <span class="mockup-url">{{ project.title.toLowerCase() }}.dashboard / overview</span>
        </div>
        <div class="mockup-body">
          <div class="mockup-side">
            <span /><span /><span /><span /><span /><span /><span />
          </div>
          <div class="mockup-main">
            <div class="mockup-metrics">
              <div v-for="(m, i) in metrics" :key="i" class="mockup-metric"><b>{{ m }}</b><i /></div>
            </div>
            <div class="mockup-chart">
              <span v-for="(h, i) in bars" :key="i" :style="{ height: `${h}%`, animationDelay: `${i * 60}ms` }" />
            </div>
            <div class="mockup-rows">
              <span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
