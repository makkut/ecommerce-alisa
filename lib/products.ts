import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/app/libs/sanity";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// const getProductsGroq = groq`*[_type == 'product']{
//  _id,
//   title,
//   description,
//   images,
//   category[]-> {
//     _id,
//     title,
//     description
//   },
//   color[]-> {
//     _id,
//     title,
//     description
//   },
//   price,
//   rowprice,
//   ratings,
//   isnew,
//   body,
//   bodyshort,
//   position,
//   brand,
//   quantity
// } | order(_createdAt desc)`;

// export const getProducts = async () => {
//   const productsData = await sanityClient.fetch(getProductsGroq);
//   return productsData;
// };

export const getProducts = async (
  category?: string | undefined | null,
  color?: string | undefined | null
) => {
  let gQuery = '*[_type == "product"';
  if (category) {
    gQuery += ` && references("${category}")`;
  }
  if (color) {
    gQuery += ` && references("${color}") `;
  }
  //   let order = "";
  //   if (sort !== "default") {
  //     if (sort === "lowest") order = "| order(price asc)";
  //     if (sort === "highest") order = "| order(price desc)";
  //     if (sort === "toprated") order = "| order(rating desc)";
  //   }

  gQuery += `] {
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
  quantity} | order(_createdAt desc)`;
  const productsData = await sanityClient.fetch(gQuery);
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
