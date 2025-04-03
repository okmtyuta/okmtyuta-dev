import type { ComponentProps, ReactNode } from "react"
// import {
// 	Breadcrumb,
// 	BreadcrumbList,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import Link from "next/link"

interface FrameProps {
	children: ReactNode
}
interface SiteMainProps {
	children: ReactNode
}
const Frame = (props: FrameProps) => {
	return <div className="max-w-5xl my-0 mx-auto py-0 px-5">{props.children}</div>
}

export const SiteMain = (props: SiteMainProps) => {
	return (
		<main>
			<Frame>{props.children}</Frame>
		</main>
	)
}
