import sanityClient from "@/app/libs/sanity";
import { Category } from "@/type";

export const getCategories = async () => {
  const categoriesData = await sanityClient.fetch<Category[]>(
    `*[_type == "category"] {
  _id,
    title,
    description
}`
  );
  return categoriesData;
};
