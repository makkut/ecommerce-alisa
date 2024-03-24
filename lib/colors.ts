import sanityClient from "@/app/libs/sanity";
import { Color } from "@/type";

export const getColors = async () => {
  const colorsData = await sanityClient.fetch<Color[]>(
    `*[_type == "color"] {
    _id,
    title,
    description
}`
  );
  return colorsData;
};
