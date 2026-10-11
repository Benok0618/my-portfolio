<script setup lang="ts">
import { profile, experience, moreProjects, awards, skillGroups, education, contacts } from '~/data/portfolio'

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('order', 'ASC').all(),
)

const yearsBuilding = new Date().getFullYear() - 2021

const aboutItems = [
  { k: 'name', v: profile.name },
  { k: 'role', v: 'Full-stack Developer' },
  { k: 'location', v: profile.location },
  { k: 'education', v: 'BS Computer Science, LSPU Los Baños (2025)' },
  { k: 'stack', v: 'Laravel · Vue 3 · Inertia.js' },
  { k: 'languages', v: 'Tagalog, English' },
  { k: 'status', v: profile.status },
]

const stats = [
  { value: 3, label: 'flagship systems', suffix: '' },
  { value: yearsBuilding, label: 'years building, since 2021', suffix: '' },
  { value: 3, label: 'government offices served', suffix: '' },
]

const visibleContacts = computed(() =>
  import.meta.dev ? contacts : contacts.filter((c) => !c.placeholder),
)

const timelineEl = ref<HTMLElement | null>(null)
const tlProgress = ref(0)
let onScrollTl: (() => void) | null = null

onMounted(() => {
  if (prefersReducedMotion()) {
    tlProgress.value = 1
    return
  }
  onScrollTl = () => {
    const el = timelineEl.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    const passed = vh * 0.72 - rect.top
    tlProgress.value = Math.max(0, Math.min(1, passed / rect.height))
  }
  onScrollTl()
  window.addEventListener('scroll', onScrollTl, { passive: true })
  window.addEventListener('resize', onScrollTl)
})

onBeforeUnmount(() => {
  if (onScrollTl) {
    window.removeEventListener('scroll', onScrollTl)
    window.removeEventListener('resize', onScrollTl)
  }
})
</script>

<template>
  <main id="main" class="page">
    <HeroSection />

    <section id="about" class="section section-alt">
      <div class="shell">
        <Reveal>
          <SectionLabel label="ABOUT" />
          <h2 class="section-title">Full-stack systems for government and health offices.</h2>
        </Reveal>

        <div class="grid-12 about-grid" style="margin-top: 2.2rem">
          <Reveal :delay="80" class="col-7">
            <TerminalCard command="whoami && cat profile.txt" :items="aboutItems" />
          </Reveal>

          <Reveal :delay="180" class="col-5">
            <div class="stats">
              <StatCounter
                v-for="(stat, i) in stats"
                :key="stat.label"
                :value="stat.value"
                :label="stat.label"
                :suffix="stat.suffix"
                :delay="i * 140"
              />
            </div>
            <p class="about-offices">
              DOST-CALABARZON · Municipal Health Office RHU1 · PESO
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="shell">
        <Reveal>
          <SectionLabel label="EXPERIENCE" />
          <h2 class="section-title">Where I've built.</h2>
        </Reveal>

        <div ref="timelineEl" class="timeline" :style="{ '--progress': tlProgress }">
          <div class="timeline-rail" aria-hidden="true">
            <div class="timeline-rail-fill" />
          </div>
          <TimelineItem v-for="item in experience" :key="item.role" :item="item" />
        </div>
      </div>
    </section>

    <section id="projects" class="section section-alt">
      <div class="shell">
        <Reveal>
          <SectionLabel label="PROJECTS" />
          <h2 class="section-title">Selected work.</h2>
          <p class="section-lead">
            Three flagship systems — one in active development, one delivered, one completed.
          </p>
        </Reveal>

        <div class="projects-list">
          <Reveal v-for="(project, i) in projects" :key="project.title" :delay="i * 100">
            <ProjectFeature
              :project="project"
              :index="i + 1"
              :reversed="(i + 1) % 2 === 0"
            />
          </Reveal>
        </div>

        <h3 class="subhead">// More projects</h3>
        <div class="card-grid">
          <Reveal v-for="(mp, i) in moreProjects" :key="mp.title" :delay="i * 70">
            <ProjectCard :project="mp" />
          </Reveal>
        </div>

        <h3 class="subhead">// Awards</h3>
        <div class="award-strip">
          <Reveal v-for="(award, i) in awards" :key="award.title" :delay="i * 80">
            <div class="award panel">
              <span class="award-icon" aria-hidden="true">★</span>
              <div>
                <h4>
                  <a v-if="award.link" :href="award.link" target="_blank" rel="noopener">{{ award.title }}</a>
                  <template v-else>{{ award.title }}</template>
                </h4>
                <p>{{ award.detail }}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="shell">
        <Reveal>
          <SectionLabel label="SKILLS" />
          <h2 class="section-title">Tools and craft.</h2>
        </Reveal>
        <div class="skill-grid">
          <Reveal v-for="(group, i) in skillGroups" :key="group.title" :delay="i * 80">
            <SkillGroup :group="group" />
          </Reveal>
        </div>
      </div>
    </section>

    <section id="education" class="section section-alt">
      <div class="shell">
        <Reveal>
          <SectionLabel label="EDUCATION" />
          <h2 class="section-title">Education.</h2>
        </Reveal>
        <div class="edu-grid">
          <Reveal v-for="(item, i) in education" :key="item.program" :delay="i * 90">
            <div class="edu panel bracket">
              <span class="period">{{ item.period }}</span>
              <h3>{{ item.program }}</h3>
              <p>{{ item.school }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="shell">
        <Reveal>
          <div class="contact-head">
            <SectionLabel label="CONTACT" />
            <h2 class="section-title" style="margin-inline: auto">Let's build something</h2>
          </div>
        </Reveal>
        <div class="contact-grid">
          <Reveal v-for="(contact, i) in visibleContacts" :key="contact.id" :delay="i * 80">
            <ContactCard :contact="contact" />
          </Reveal>
        </div>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
