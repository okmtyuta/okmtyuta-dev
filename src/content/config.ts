import { defineCollection } from "astro:content";
import { PostSchema } from "../schemas/post";

const postCollection = defineCollection({
  type: "content",
  schema: PostSchema,
});

export const collections = {
  post: postCollection,
};
