"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

import { ProductProps } from "@/type";
import { PortableText } from "@portabletext/react";
import Currency from "@/components/ui/currency";
import useCart from "@/app/hooks/use-cart";
import Button from "../ui/Button/Button";
import { RichText } from "../RichText";

interface InfoProps {
  data: ProductProps;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const productInCart = cart?.items?.find(
    (element) => element._id === data._id
  );

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold text-black">Характеристики:</h3>
        <PortableText value={data?.bodyshort} components={RichText} />
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Цвет:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color[0]?.description }}
            title={data?.color[0]?.title}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-4"
          onClick={onAddToCart}
          disabled={productInCart && productInCart.quantity >= data.quantity}
        >
          Add To Cart
          <ShoppingCart />
        </Button>
        <p>Max: {data.quantity} шт.</p>
      </div>
    </div>
  );
};

export default Info;
