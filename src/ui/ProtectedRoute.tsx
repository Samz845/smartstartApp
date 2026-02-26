import { Navigate } from "react-router-dom";
import { useUser } from "../features/accounts/useUser";
import type { protectedRoutesProps } from "../types";

function ProtectedRoute({ allowedRoles, children }: protectedRoutesProps) {
  const { user, isLoading } = useUser();
  const role: string = user?.role;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return children;
}

export default ProtectedRoute;
