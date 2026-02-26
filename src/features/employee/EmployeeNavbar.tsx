import { Link, NavLink } from "react-router-dom";
import styles from "./EmployeeNavbar.module.css";
import { FaCheckSquare, FaHome, FaSignOutAlt, FaUpload } from "react-icons/fa";
import { FiCalendar, FiTrendingUp, FiUpload, FiUser } from "react-icons/fi";
import { useLogOut } from "../accounts/useLogOut";
import Wrapper from "../../ui/Wrapper";
function EmployeeNavbar() {
  const { logOut, isLoggingOut } = useLogOut();
  return (
    <aside className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/" className="logo-link">
          <img
            src="/assets/smartstart-logo-orig.png"
            alt="Smartstart Logo"
            className="logo-img"
          />
        </Link>
      </div>

      <nav className={styles.navMenu}>
        <NavLink
          to="/employee/dashboard"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/checklist"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaCheckSquare />
          <span>Checklist</span>
        </NavLink>

        <NavLink
          to="/uploads"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaUpload />
          <span>Uploads</span>
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FiTrendingUp />
          <span>Progress </span>
        </NavLink>

        <Wrapper>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FiCalendar />
            <span>Events</span>
          </NavLink>
        </Wrapper>

        <Wrapper>
          <NavLink
            to=""
            className={({ isActive }) =>
              `${isActive ? styles.active + " " : ""}`
            }
          >
            <FiUpload />
            <span>Documents</span>
          </NavLink>
        </Wrapper>

        <NavLink
          to=""
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <span>
            <FiUser size={15} />
          </span>
          <span>Profile</span>
        </NavLink>
      </nav>

      <div className={styles.logOut}>
        <button onClick={() => logOut()}>
          <FaSignOutAlt />
          {isLoggingOut ? "please wait" : "Log Out"}
        </button>
      </div>
    </aside>
  );
}

export default EmployeeNavbar;
