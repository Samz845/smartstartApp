import { Navigate } from "react-router-dom";
import { useUser } from "../features/accounts/useUser";

function ProtectedRoute({ allowedRoles, children }) {
  const { user, isLoading } = useUser();
  const role = user?.role;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("ProtectedRoute - User:", user);
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return children;
}

export default ProtectedRoute;
