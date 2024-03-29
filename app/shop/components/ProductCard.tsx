"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import { urlFor } from "@/lib/products";
import Currency from "@/components/ui/currency";
import { ProductProps } from "@/type";
import usePreviewModal from "@/app/hooks/use-preview-modal";
import useCart from "@/app/hooks/use-cart";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface Props {
  data: ProductProps;
}

const ProductCard = ({ data }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const productInCart = cart?.items?.find(
    (element) => element._id === data._id
  );

  const handleClick = () => {
    router.push(`/product/${data?._id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={urlFor(data?.images[0]).url()}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div
          className={cn(
            isDesktop
              ? "opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"
              : "absolute w-full px-6 bottom-5"
          )}
        >
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              disabled={
                productInCart && productInCart?.quantity >= data.quantity
              }
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data?.title}</p>
        <p className="text-sm text-gray-500">{data?.category[0].title}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
