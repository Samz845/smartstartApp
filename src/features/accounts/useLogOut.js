import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as logOutApi } from "../../services/userAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logOut, isPending: isLoggingOut } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/login");
    },

    onError: (error) => toast.error(error.message),
  });
  return { logOut, isLoggingOut };
}
