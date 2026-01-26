import { FaClock } from "react-icons/fa";
import styles from "./EmployeeCard.module.css";

function EmployeeCard({ user }) {
  const { name, role, startDate, progress, status } = user;
  const workRate = (progress / 100) * 100;
  return (
    <div className={styles.table_body} key={user.name}>
      <p>{name}</p>
      <p className={styles.role}>{role}</p>
      <p>{startDate}</p>
      <div className={styles.workRate}>
        <progress
          className={styles.progress}
          value={progress}
          max={100}
        ></progress>
        <span>{workRate}%</span>
      </div>

      <p
        className={`${styles.status} ${
          status === "In Progress" ? styles.inprogress : styles.not_started
        }`}
      >
        <FaClock
          className={`${status === "In Progress" ? styles.yellow : styles.red}`}
        />
        <span>{status}</span>
      </p>
    </div>
  );
}

export default EmployeeCard;
