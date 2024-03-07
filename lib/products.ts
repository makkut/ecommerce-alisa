import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/app/libs/sanity";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

const getProductsGroq = groq`*[_type == 'product']{
 _id,
  title,
  description,
  images,
  category[]-> {
    _id,
    title,
    description
  },
  color[]-> {
    _id,
    title,
    description
  },
  price,
  rowprice,
  ratings,
  isnew,
  body,
  bodyshort,
  position,
  brand,
  quantity
} | order(_createdAt desc)`;

export const getProducts = async () => {
  const productsData = await sanityClient.fetch(getProductsGroq);
  return productsData;
};

const getProductByIdQueryGroq = groq`*[_type == 'product' && _id == $productId][0]{
  _id,
  title,
  description,
  images,
  category[]-> {
    _id,
    title,
    description
  },
  color[]-> {
    _id,
    title,
    description
  },
  price,
  rowprice,
  ratings,
  isnew,
  body,
  bodyshort,
  position,
  brand,
  quantity
}`;

export const getProduct = async (id: string) => {
  const productData = await sanityClient.fetch(getProductByIdQueryGroq, {
    productId: id,
  });
  return productData;
};
