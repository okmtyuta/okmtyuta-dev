import type { ReactNode } from "react"

interface PostFrameProps {
	children: ReactNode
}
export const PostFrame = ({ children }: PostFrameProps) => {
	return (
		<div className="w-full">
			<div className="max-w-106 md:max-w-192 lg:max-w-256 xl:max-w-256 2xl:max-w-256 my-0 mx-auto py-0 px-5">
				{children}
			</div>
		</div>
	)
}
