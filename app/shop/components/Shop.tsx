"use client";

import { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";

import { Category, Color, ProductProps } from "@/type";
import Container from "./Container";
import ListProduct from "./ListProduct";
import ShowListGrid from "./ShowListGrid";
import Product from "./Product";
import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";
import Filter from "@/components/Filter/Filter";
import { useParams, useSearchParams } from "next/navigation";
import { getCategories } from "@/lib/categories";
import { getColors } from "@/lib/colors";
import NoResults from "@/components/ui/no-results";
import MobileFilter from "@/components/Filter/MobileFilters";

const Shop = () => {
  const searchParams = useSearchParams();

  const categoriesId = searchParams.get("categoriesId");
  const colorsId = searchParams.get("colorsId");
  console.log("categoriesId", categoriesId);
  console.log("colorsId", colorsId);
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
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [colorsData, setColorsData] = useState<Color[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getCategories();
        const colors = await getColors();
        setColorsData(colors);
        setCategoriesData(categories);
        const data = await getProducts(categoriesId, colorsId);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [searchParams]);
  console.log("categoriesData", categoriesData);
  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilter categories={categoriesData} colors={colorsData} />
          <div className="hidden lg:block">
            <Filter
              valueKey="categoriesId"
              name="Категория"
              data={categoriesData}
            />
            <Filter valueKey="colorsId" name="Цвет" data={colorsData} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {productData.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productData?.map((item: ProductProps) => (
                <ProductCard key={item?._id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
