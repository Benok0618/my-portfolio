import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        short: z.string(),
        summary: z.string(),
        status: z.string(),
        period: z.string(),
        role: z.string(),
        client: z.string(),
        tech: z.array(z.string()),
        features: z.array(z.string()),
        link: z.string().optional(),
        repo: z.string().optional(),
        order: z.number(),
        accent: z.enum(['teal', 'violet', 'amber']),
      }),
    }),
  },
})
