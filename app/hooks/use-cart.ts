import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

import { ProductProps } from "@/type";

interface CartStore {
  items: ProductProps[];
  addItem: (data: ProductProps) => void;
  removeItem: (id: string) => void;
  removeItemAll: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductProps) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item._id === data._id
        );

        if (existingItemIndex !== -1) {
          // If item already exists, update the quantity
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          };

          set({ items: updatedItems });
          toast.success("Обновление корзины");
        } else {
          // Otherwise, add a new item to the cart
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast.success("Товар добавлен в корзину");
        }
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item._id === id
        );

        if (existingItemIndex !== -1) {
          // If the item exists, decrease the quantity by 1
          const updatedItems = [...currentItems];
          if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
          } else {
            // If quantity is 1, remove the item from the cart
            updatedItems.splice(existingItemIndex, 1);
          }

          set({ items: updatedItems });
          toast.success("Обновление корзины");
        }
      },
      removeItemAll: (id: string) => {
        set({ items: [...get().items.filter((item) => item._id !== id)] });
        toast.success("Товар удален из корзины");
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
