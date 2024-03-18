import { getUserById } from "@/data/user";
import { useQuery } from "@tanstack/react-query";

const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => await getUserById(id).then(),
  });
};

export { useUser };
