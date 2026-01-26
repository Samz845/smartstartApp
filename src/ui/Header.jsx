import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { FiMenu } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <>
      <header className={styles.header}>
        <img
          src="assets/smartstart-logo-orig.png"
          alt="home_page_logo"
          className={styles.img}
        />

        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>

        <button className={styles.btn} onClick={handleNavigate}>
          Get Started
        </button>

        <button
          className={styles.hamburger}
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <FaBars className="text-black text-2xl" />
        </button>
      </header>

      {/* Overlay and sliding drawer for mobile nav */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <nav className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <div className={styles.drawerTop}>
          <button
            className={styles.closeBtn}
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            X
          </button>
        </div>
        <ul className={styles.drawerLinks}>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/about">
              About Us
            </NavLink>
          </li>
        </ul>

        <button className={styles.btn} onClick={handleNavigate}>
          Get Started
        </button>
      </nav>
    </>
  );
}

export default Header;
