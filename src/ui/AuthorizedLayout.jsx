import { Outlet } from "react-router-dom";
import { useUser } from "../features/accounts/useUser";
import styles from "./AuthorizedLayout.module.css";
import AdminNavbar from "../features/admin/AdminNavbar";
import AdminHeader from "../features/admin/AdminHeader";
import EmployeeHeader from "../features/employee/EmployeeHeader";
import EmployeeNavbar from "../features/employee/EmployeeNavbar";
function AuthorizedLayout() {
  const { user } = useUser();
  const role = user?.role;
  return (
    <div className={styles.layout}>
      {role === "admin" ? <AdminHeader /> : <EmployeeHeader />}
      {role === "admin" ? <AdminNavbar /> : <EmployeeNavbar />}

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthorizedLayout;
