"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ProductProps } from "@/type";
import IconButton from "@/components/ui/icon-button";
import { X, Plus, Minus } from "lucide-react";
import Currency from "@/components/ui/currency";
import useCart from "@/app/hooks/use-cart";
import { getProduct, urlFor } from "@/lib/products";

interface CartItemProps {
  data: ProductProps;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { removeItemAll, addItem, removeItem } = useCart();
  const [productData, setProductData] = useState<ProductProps | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data2 = await getProduct(data._id);
        setProductData(data2);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

  if (!productData) {
    return;
  }
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={urlFor(data?.images[0]).url()}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => removeItemAll(data._id)}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.title}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color[0].title}</p>
          </div>

          <div>
            <div className="text-gray-500 flex items-center py-5">
              <IconButton
                disabled={data.quantity >= productData.quantity}
                onClick={() => addItem(data)}
                icon={<Plus size={15} />}
              />
              <div className="w-10 text-center">{data.quantity}</div>
              <IconButton
                onClick={() => removeItem(data._id)}
                icon={<Minus size={15} />}
              />
              <div className="w-24 text-end">
                Max: {productData.quantity} шт.
              </div>
            </div>
            <Currency value={data.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
