import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/app/libs/sanity";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export const productQuery = groq`*[_type == 'product']{
  ...
} | order(_createdAt desc)`;

export const products = async () => {
  const productData = await sanityClient.fetch(productQuery);
  return productData;
};
