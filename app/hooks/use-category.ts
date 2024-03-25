import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/lib/categories";

function useCategory() {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => await getCategories(),
  });
}

export { useCategory };
