import {
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import styles from "./AdminDashboard.module.css";
import { MdOutlineError } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import EmployeeCard from "./EmployeeCard";

function AdminDashboard() {
  const users = [
    {
      name: "samuel olaiya",
      role: "Logistics Specialist",
      startDate: "Oct 30,2025",
      progress: 0,
      status: "Not Started",
    },

    {
      name: "Daniel Echendu",
      role: "Backend Designer",
      startDate: "Oct 26,2025",
      progress: 20,
      status: "In Progress",
    },
    {
      name: "Kajopinola Oluwatosin",
      role: "Product Manager",
      startDate: "Oct 20,2025",
      progress: 50,
      status: "In Progress",
    },
    {
      name: "Ikeji Ifeanyi",
      role: "Product Designer",
      startDate: "Oct 20,2025",
      progress: 30,
      status: "In Progress",
    },
  ];

  return (
    <>
      <div className={styles.page_header}>
        <div className={styles.dashboad_header}>
          <h3>Dashboard</h3>
          <p>Overview of onboarding activities</p>
        </div>

        <button className={styles.new_employee_btn}>
          <FaUser className={styles.icon} />
          <span>New Employee</span>
        </button>
      </div>

      <section className={styles.stats_grid}>
        <div className={styles.card}>
          <div>
            <p>Active Employees</p>
            <FaUsers className={`${styles.icon} ${styles.users}`} />
          </div>
          <span id="active-count">0</span>
        </div>

        <div className={styles.card}>
          <div>
            <p>Completed Onboarding</p>
            <span>
              <FaCheckCircle className={`${styles.icon} ${styles.completed}`} />
            </span>
          </div>
          <span id="completed-count">0</span>
        </div>

        <div className={styles.card}>
          <div>
            <p>In Progress</p>
            <FaClock className={`${styles.icon} ${styles.progress}`} />
          </div>
          <span id="progress-count">0</span>
        </div>

        <div className={styles.card}>
          <div>
            <p>Overdue Tasks</p>
            <MdOutlineError className={`${styles.icon} ${styles.overDue}`} />
          </div>

          <span id="overdue-count">0</span>
        </div>
      </section>

      <section className={styles.recent_employees}>
        <div className={styles.table_head}>
          <div>
            <h3>Recent Employees</h3>
            <span>Track onboarding progress</span>
          </div>

          <button className={styles.view_all}>
            <FiTrendingUp />
            <span>View All</span>
          </button>
        </div>

        <div className={styles.employee_container}>
          <div className={styles.table} role="table">
            <div className={styles.table_header}>
              <div>Employee</div>
              <div>Role</div>
              <div>Start Date</div>
              <div>Progress</div>
              <div>Status</div>
            </div>

            {users.map((user) => (
              <EmployeeCard user={user} key={user.name} />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.bottom_grid}>
        <section className={styles.routine}>
          <h3>Onboarding Routine</h3>
          <p>As per HR rules, new hires should onboard within first week.</p>
          <button className={styles.schedule_btn}>Schedule Onboarding</button>
        </section>

        <section className={styles.chart_box}>
          <h3>Onboarding Completion Status</h3>
          <canvas id="onboardChart"></canvas>
        </section>
      </div>
    </>
  );
}

export default AdminDashboard;
