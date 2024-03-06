import { create } from "zustand";

import { ProductProps } from "@/type";

interface PriviewModalStore {
  isOpen: boolean;
  data?: ProductProps;
  onOpen: (data: ProductProps) => void;
  onClose: () => void;
}

const usePreviewModal = create<PriviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductProps) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
