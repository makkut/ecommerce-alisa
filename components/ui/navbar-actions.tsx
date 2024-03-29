"use client";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/app/hooks/use-cart";
import Button from "./Button/Button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return (
      <div className="ml-auto flex items-center gap-x-4">
        <Button
          onClick={() => router.push("/cart")}
          className="flex items-center rounded-full bg-black px-4 py-2"
        >
          <ShoppingBag size={20} color="white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        {cart.items.length != 0 && (
          <span className="ml-2 text-sm font-medium text-white">
            {cart.items.length}
          </span>
        )}
      </Button>
    </div>
  );
};

export default NavbarActions;
