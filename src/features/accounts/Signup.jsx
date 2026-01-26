import { useState } from "react";
import AdminForm from "./AdminForm";
import EmployeeForm from "./EmployeeForm";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState("admin");
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src="assets/signup.png"
          alt="Smartstart illustration"
          className={styles.img}
        />
      </div>

      <div className={styles.right}>
        <div>
          <div className={styles.header}>
            <div className="flex items-center justify-center">
              <img
                className={styles.signup_logo}
                src="assets/smartstart-logo-orig.png"
                alt="Smartstart Logo"
              />
            </div>

            <h1 className={styles.signup_heading}>Create an account</h1>
            <p className={styles.login_p}>
              Already have an account?
              <Link className={styles.login} to="/login">
                Log in
              </Link>
            </p>
          </div>

          <div className={styles.radio}>
            <div>
              <label className={styles.label}>Admin</label>
              <input
                type="radio"
                value="admin"
                name="role"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label}>Employee</label>
              <input
                type="radio"
                value="employee"
                name="role"
                checked={role === "employee"}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
          {role === "admin" ? <AdminForm /> : <EmployeeForm />}
        </div>
      </div>
    </div>
  );
}

export default Signup;
