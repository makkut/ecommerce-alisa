"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { ProductProps } from "@/type";
import Container from "./Container";
import ProductCard from "./ProductCard";
import Filter from "@/components/Filter/Filter";
import NoResults from "@/components/ui/no-results";
import MobileFilter from "@/components/Filter/MobileFilters";
import { useProducts } from "@/app/hooks/use-product";
import { useColors } from "@/app/hooks/use-color";
import { useCategory } from "@/app/hooks/use-category";
import Loading from "@/app/loading";

const Shop = () => {
  const searchParams = useSearchParams();

  const categoriesId = searchParams.get("categoriesId");
  const colorsId = searchParams.get("colorsId");
  console.log("categoriesId", categoriesId);
  console.log("colorsId", colorsId);

  const {
    isLoading: isLoadingProducts,
    error: errorProduct,
    data: dataProduct,
  } = useProducts(categoriesId, colorsId);
  const {
    isLoading: isLoadingColor,
    error: errorColor,
    data: dataColor,
  } = useColors();
  const {
    isLoading: isLoadingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useCategory();

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          {isLoadingCategory || isLoadingColor ? (
            <>
              <Loading />
            </>
          ) : (
            dataCategory &&
            dataColor && (
              <MobileFilter categories={dataCategory} colors={dataColor} />
            )
          )}

          <div className="hidden lg:block">
            {isLoadingCategory || isLoadingColor ? (
              <>
                <Loading />
              </>
            ) : (
              <>
                {dataCategory && (
                  <Filter
                    valueKey="categoriesId"
                    name="Категория"
                    data={dataCategory}
                  />
                )}
                {dataColor && (
                  <Filter valueKey="colorsId" name="Цвет" data={dataColor} />
                )}
              </>
            )}
            {/* {isLoadingColor ? (
              <>LOADING!!!</>
            ) : (
              <>
                {dataColor && (
                  <Filter valueKey="colorsId" name="Цвет" data={dataColor} />
                )}
              </>
            )} */}
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {isLoadingProducts ? (
              <>
                <Loading />
              </>
            ) : (
              <>
                {dataProduct.length === 0 && <NoResults />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {dataProduct?.map((item: ProductProps) => (
                    <ProductCard key={item?._id} data={item} />
                  ))}
                </div>
              </>
            )}
            {/* {data.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data?.map((item: ProductProps) => (
                <ProductCard key={item?._id} data={item} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
