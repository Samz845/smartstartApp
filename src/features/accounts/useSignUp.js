import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/userAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["user"], data.data);
      const userRole = data.data.role;
      if (userRole === "admin") navigate("/admin/dashboard");
      else if (userRole === "employee") navigate("/employee/dashboard");
      toast.success(data.message);
    },

    onError: (err) => toast.success(err.message),
  });

  return { signUp, isSigningUp };
}
