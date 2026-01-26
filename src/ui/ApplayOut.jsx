import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./ApplayOut.module.css";

function ApplayOut() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ApplayOut;
