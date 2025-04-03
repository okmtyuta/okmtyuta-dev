import { getCollection } from "astro:content"

interface IGetPostsParams {}
const getPosts = async (params: IGetPostsParams = {}) => {
	const posts = (await getCollection("post")).toSorted(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	)

	return posts
}

export const PostService = {
	getPosts,
}
