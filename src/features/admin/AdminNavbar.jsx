import { Link, NavLink } from "react-router-dom";
import styles from "./AdminNavbar.module.css";
import {
  FiCalendar,
  FiCheckSquare,
  FiHome,
  FiTrendingUp,
  FiUpload,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { useLogOut } from "../accounts/useLogOut";

function AdminNavbar() {
  const { logOut, isLoggingOut } = useLogOut();
  return (
    <aside className={styles.nav}>
      <Link to="/" className={styles.home_link}>
        <img src="/assets/smartstart-logo-orig.png" class="logo-img" />
      </Link>

      <nav className={styles.navLinks}>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/admin/employees"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin/checklist"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiCheckSquare />
          <span>Checklist</span>
        </NavLink>

        <NavLink
          to="/admin/progress"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiTrendingUp />
          <span>Progress</span>
        </NavLink>

        <NavLink
          to="/admin/uploads"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiUpload />
          <span>Uploads</span>
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiCalendar />
          <span>Events</span>
        </NavLink>

        <NavLink
          to="/admin/profile"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiUser />
          <span>Profile</span>
        </NavLink>
      </nav>

      <div className={styles.logOut}>
        <i className="fas fa-sign-out-alt"></i>
        <button onClick={logOut}>
          <FaSignOutAlt />
          {isLoggingOut ? "please wait.." : "Log Out"}
        </button>
      </div>
    </aside>
  );
}

export default AdminNavbar;
