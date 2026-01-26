import UserAvatar from "../../ui/UserAvatar";
import styles from "./AdminHeader.module.css";
import { FaBars, FaSearch } from "react-icons/fa";
function AdminHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.hamburger}>
        <FaBars />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className={styles.profile}>
        <img src="/assets/profile.png" className="profile-pic" />
        <UserAvatar />
      </div>
    </header>
  );
}

export default AdminHeader;
