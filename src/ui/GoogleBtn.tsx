import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

function GoogleBtn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const googleAuth = async (response: CredentialResponse) => {
    try {
      const googleToken = response.credential;
      if (!response.credential) {
        throw new Error("No Google credential returned");
      }

      const googleUser = jwtDecode(googleToken);

      const res = await fetch(
        "https://capstone-hr-backend.onrender.com/api/users/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: googleToken,
          }),
        },
      );

      if (!res.ok) throw new Error("Google auth failed");
      const result = await res.json();
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.data));
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/employee/dashboard");

      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.role) {
        return <Navigate to="/unauthorized" replace />;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GoogleLogin
      onSuccess={googleAuth}
      onError={() => console.error("Google Login Failed")}
      theme="outline"
      size="large"
      text="signin_with"
    />
  );
}

export default GoogleBtn;
