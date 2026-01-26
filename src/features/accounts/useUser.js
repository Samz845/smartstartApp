import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/userAuth";

export function useUser() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await getCurrentUser();
      return result.data;
    },
  });

  return { user, isLoading, isError };
}
