import { FaCheckSquare } from "react-icons/fa";
import UserAvatar from "../../ui/UserAvatar";
import styles from "./EmployeeDashboard.module.css";
import { FiList } from "react-icons/fi";

function EmployeeDashboard() {
  return (
    <>
      <section className={styles.dashboard_content}>
        <div className={styles.welcome_banner}>
          <h2>
            <span>Welcome</span> <UserAvatar />
          </h2>
          <p>Let's get you settled in</p>
        </div>

        <div className={styles.progress_widget}>
          <div className={styles.progress_ring}>
            <div className={styles.progress_inner}>
              <p>0%</p>
              <span>Complete</span>
            </div>
          </div>

          <div className={styles.progress_details}>
            <h3>Onboarding Progress: 0% Complete</h3>
            <p>Better late than never! Complete your tasks to reach 100%.</p>
          </div>
        </div>
      </section>

      <section className={styles.sessions_grid}>
        <div className={styles.info_container}>
          <h4>Quick Information</h4>
          <div className={styles.details_section}>
            <div className={styles.details_block}>
              <h5>Details</h5>
              <div className={styles.detail_row}>
                <span className={styles.label}>Employee ID:</span>
                <span className={styles.employee}>123456789</span>
              </div>

              <div className={styles.detail_row}>
                <span className={styles.label}>Email:</span>
                <span className={styles.employee}>
                  fatomilolasamuel@gmail.com
                </span>
              </div>

              <div className={styles.detail_row}>
                <span className={styles.label}>Phone:</span>
                <span className={styles.employee}>+2349083387802</span>
              </div>

              <div className={styles.detail_row}>
                <span className={styles.label}>Department:</span>
                <span className={styles.employee}>Logistics</span>
              </div>

              <div className={styles.detail_row}>
                <span className={styles.label}>Start Date:</span>
                <span className={styles.employee}>Oct 30,2025</span>
              </div>
            </div>

            <div className={styles.details_block}>
              <h5>Support Team</h5>
              <div className={styles.support_list}>
                <h6>Hassan Ahmed</h6>
                <p>Hassanahmed@gmail.com</p>
                <h6>George Adekunle</h6>
                <p>Geargeadekunle@gmail.com</p>
                <h6>Okafor Benedicta</h6>
                <p>Benedictaokafor@gmail.com</p>
              </div>
            </div>

            <div className={styles.details_block}>
              <h5>Manager</h5>
              <div className={styles.manager_contact}>
                <h6 className={styles.manager_name}>Olumide Adegboyega</h6>
                <span className={styles.manager_email}>
                  olumideadegboyega@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.upcoming_sessions}>
          <h4>Upcoming Sessions</h4>

          <div className={styles.session_grid}>
            <div className={styles.session}>
              <p>Policy Induction</p>
              <span>10.00 AM - 10.25 AM</span>
            </div>

            <div className={styles.session}>
              <p>Company's Culture Induction</p>
              <span>12.00 PM - 12.245 PM</span>
            </div>

            <div className={styles.session}>
              <p>Maximizing Productivity</p>
              <span>2.00 PM - 3.00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cards_grid}>
        <div className={styles.action_card}>
          <FaCheckSquare />
          <div className={styles.card_text}>
            <h3>View Checklist</h3>
            <p>See your onboarding tasks and track your progress</p>
          </div>
          <button className={styles.primary_btn}>Open Checklist</button>
        </div>

        <div className={styles.action_card}>
          <FiList />
          <div className={styles.card_text}>
            <h3>Upload Documents</h3>
            <p>Submit your required documents securely</p>
          </div>
          <button
            href="employee-documents.html"
            className={styles.secondary_btn}
          >
            Upload Files
          </button>
        </div>
      </section>
    </>
  );
}

export default EmployeeDashboard;
