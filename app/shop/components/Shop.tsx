"use client";

import { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";

import { ProductProps } from "@/type";
import Container from "./Container";
import ListProduct from "./ListProduct";
import ShowListGrid from "./ShowListGrid";
import Product from "./Product";
import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";

const Shop = () => {
  const [show, setShow] = useState({
    showGrid: true,
    showList: false,
  });

  const toggleGrid = () => {
    setShow({ ...show, showGrid: !show.showGrid, showList: false });
  };

  const toggleList = () => {
    setShow({ ...show, showList: !show.showList, showGrid: false });
  };

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {/* <div className="flex items-center justify-between pb-10">
        <h2 className="text-2xl text-primeColor font-bold">All Products</h2>
        <div className="flex items-center gap-4">
          <ShowListGrid func={toggleGrid} show={show.showGrid}>
            <BsGridFill />
          </ShowListGrid>
          <ShowListGrid func={toggleList} show={show.showList}>
            <ImList />
          </ShowListGrid>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productData?.map((item: ProductProps) => (
          <ProductCard key={item?._id} data={item} />
        ))}
      </div>
      {/* {show.showGrid ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {productData?.map((item: ProductProps) => (
            <Product key={item?._id} product={item} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-5">
          {productData?.map((item: ProductProps) => (
            <ListProduct key={item?._id} product={item} />
          ))}
        </div>
      )} */}
    </Container>
  );
};

export default Shop;
