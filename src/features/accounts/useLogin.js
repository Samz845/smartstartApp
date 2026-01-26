import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/userAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logIn, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      const userRole = data.data.role;
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["user"], data.data);
      if (userRole === "admin") navigate("/admin/dashboard");
      else if (userRole === "employee") navigate("/employee/dashboard");
      toast.success(data.message);
    },

    onError: (err) => toast.error(err.message),
  });

  return { logIn, isLoggingIn };
}
