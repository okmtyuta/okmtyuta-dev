export const SiteFooter = () => {
	return (
		<footer className="w-full border-t py-12 mt-8">
			<div className="max-w-5xl my-0 mx-auto py-0 px-5 text-sm">
				<div className="flex flex-wrap gap-5">
					<div className="flex flex-col gap-2">
						<span className="text-ds-gray-1000">Resources</span>
						<a href="/about" className="text-muted-foreground">
							About me
						</a>
					</div>
				</div>

				<div className="flex justify-center gap-2">
					<span>© 2025</span>
					<a className="no-underline" href="/">
						okmtyuta.dev
					</a>
				</div>
			</div>
		</footer>
	)
}
