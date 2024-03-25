import { getProducts } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";

function useProducts(
  category?: string | undefined | null,
  color?: string | undefined | null
) {
  return useQuery({
    queryKey: ["product", category, color],
    queryFn: async () => await getProducts(category, color),
  });
}

export { useProducts };
