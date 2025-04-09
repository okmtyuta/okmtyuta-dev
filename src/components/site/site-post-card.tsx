import type { PostSchema } from "@/schemas/post"
import type { z } from "astro:content"
import { Badge } from "@/components/ui/badge"

interface SitePostCardProps {
	post: z.infer<typeof PostSchema>
	slug: string
}
export const SitePostCard = (props: SitePostCardProps) => {
	const { title, date, thumbnail } = props.post
	const dateString = date.toLocaleDateString("ja-JP", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	return (
		<div>
			<a href={`/posts/${props.slug}`} className="group">
				<img src={`/thumbnails/${thumbnail}`} alt="alt" className="group-hover:brightness-110" />

				<div className="text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold text-neutral-900 group-hover:text-neutral-600 mt-3 mb-1">
					{title}
				</div>

				<div className="text-sm text-neutral-600">{dateString}</div>
			</a>
		</div>
	)
}
