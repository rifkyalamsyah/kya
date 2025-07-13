import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/projects', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    name: z.string(),
    sortTitle: z.string(),
    title: z.string(),
    desc: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    services: z.string(),
    year: z.string(),
    siteLink: z.string().optional(),
    // Transform string to Date object
    ogImage: z.string().optional(),
    image: image(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { projects };
