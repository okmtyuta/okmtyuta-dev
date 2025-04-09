import { z } from "astro:content"

export const PostSchema = z.object({
	title: z.string(),
	thumbnail: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string()),
	description: z.string(),
	series: z.string().optional().nullable(),
})
