import { useQuery } from "@tanstack/react-query";
import { getColors } from "@/lib/colors";

function useColors() {
  return useQuery({
    queryKey: ["color"],
    queryFn: async () => await getColors(),
  });
}

export { useColors };
