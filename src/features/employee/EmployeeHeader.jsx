import { Link } from "react-router-dom";
import UserAvatar from "../../ui/UserAvatar";
import { useLogOut } from "../accounts/useLogOut";
import styles from "./EmployeeHeader.module.css";
import { FaBars, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../accounts/useUser";
import { useState } from "react";
function EmployeeHeader() {
  const { logOut, isLoggingOut } = useLogOut();
  const { user, isLoading } = useUser();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={() => setOpenMenu((c) => !c)}>
        <FaBars />
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      <div className={styles.user}>
        <div className="profile-area">
          {!isLoading && (
            <img
              src={user?.profileImage || "picture01.png"}
              alt="Profile Picture"
              className="profile-pic"
            />
          )}
        </div>

        <UserAvatar />
      </div>

      <div
        className={`fixed inset-0 h-full bg-black/20 backdrop-blur-sm transition duration-700 ${
          openMenu
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-[100%] pointer-events-none"
        }`}
        onClick={() => setOpenMenu(false)}
      >
        <div className={styles.sideMenu}>
          <div className={styles.logo}>
            <Link to="/" className="logo-link">
              <img
                src="/assets/smartstart-logo-orig.png"
                alt="Smartstart Logo"
                className="logo-img"
              />
            </Link>
          </div>
          <div className={styles.logOut}>
            <button
              className="flex items-center gap-2 text-red-600"
              onClick={logOut}
            >
              <FaSignOutAlt />
              <span className="font-bold">
                {isLoggingOut ? "please wait" : "Log Out"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default EmployeeHeader;
