"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import Currency from "@/components/ui/currency";
import useCart from "@/app/hooks/use-cart";
import Button from "@/components/ui/Button/Button";

const Summary = () => {
  const searchParams = useSearchParams();
  const { items, removeAll, addItem, removeItem, removeItemAll } = useCart(
    (state) => state
  );

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams]);
  console.log("items", items);
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price * item.quantity);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item._id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Сумма заказа</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Общая сумма</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        className="w-full mt-6"
        onClick={onCheckout}
      >
        Оформить
      </Button>
    </div>
  );
};

export default Summary;
