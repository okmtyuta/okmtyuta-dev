import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationEllipsis,
	PaginationNext,
} from "@/components/ui/pagination"

interface SitePaginationProps {
	currentPage: number
	lastPage: number
	url: {
		current: string
		next?: string
		prev?: string
		first?: string
		last?: string
	}
}
export const SitePagination = ({ currentPage, lastPage, url }: SitePaginationProps) => {
	return (
		<Pagination>
			<PaginationContent>
				{url.prev && (
					<PaginationItem>
						<PaginationPrevious href={url.prev} />
					</PaginationItem>
				)}

				{url.first && (
					<PaginationItem>
						<PaginationLink href={url.first}>{1}</PaginationLink>
					</PaginationItem>
				)}

				{currentPage - 1 >= 3 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				{currentPage - 1 >= 2 && (
					<PaginationItem>
						<PaginationLink href={url.prev}>{currentPage - 1}</PaginationLink>
					</PaginationItem>
				)}

				<PaginationItem>
					<PaginationLink href={url.current} isActive>
						{currentPage}
					</PaginationLink>
				</PaginationItem>

				{lastPage - currentPage >= 2 && (
					<PaginationItem>
						<PaginationLink href={url.next}>{currentPage + 1}</PaginationLink>
					</PaginationItem>
				)}

				{lastPage - currentPage >= 3 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				{url.last && (
					<PaginationItem>
						<PaginationLink href={url.last}>{lastPage}</PaginationLink>
					</PaginationItem>
				)}

				{url.next && (
					<PaginationItem>
						<PaginationNext href={url.next} />
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	)
}
