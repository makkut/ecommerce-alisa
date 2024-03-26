import { getUserById } from "@/data/user";
import { useQuery } from "@tanstack/react-query";

function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => await getUserById(id).then(),
  });
}

export { useUser };
