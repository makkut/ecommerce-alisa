"use client";

import { ProductProps } from "@/type";
import { PortableText } from "@portabletext/react";
import Currency from "@/components/ui/currency";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import Button from "../ui/Button/Button";
import { RichText } from "../RichText";
// import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: ProductProps;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  console.log("info", data);
  //   const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    // cart.addItem(data);
  };

  console.log("datacolor", data);
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold text-black">Характеристики:</h3>
        <PortableText value={data?.bodyshort} components={RichText} />
        {/* <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3> */}
        {/* <div>{data?.body}</div> */}
        {/* </div> */}
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
        <Button className="flex items-center gap-x-4" onClick={onAddToCart}>
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
