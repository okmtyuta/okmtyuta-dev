import type { PostSchema } from "@/schemas/post";
import { getCollection, z } from "astro:content";

interface IGetPostsParams {
  tags?: string[];
}
const getPosts = async ({ tags }: IGetPostsParams = {}) => {
  const posts = (await getCollection("post"))
    .toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .filter((post) => {
      if (tags == null) {
        return true;
      }
      return tags.every((tag) => post.data.tags.includes(tag));
    });

  return posts;
};

export const PostService = {
  getPosts,
};
