import type { ReactNode } from "react"

interface MainFrameProps {
	children: ReactNode
}
export const MainFrame = ({ children }: MainFrameProps) => {
	return (
		<div className="w-full">
			<div className="max-w-5xl my-0 mx-auto py-0 px-5">{children}</div>
		</div>
	)
}
