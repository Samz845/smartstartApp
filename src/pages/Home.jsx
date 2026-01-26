import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_flex}>
          <div className={styles.hero_text}>
            <h1 className="hero_heading">
              Recruit Faster,
              <span className="text-blue-600">
                Onboard <br />
                Smarter
              </span>
              , and Build Stronger teams.
            </h1>
            <p className="hero_pg">
              Seamless onboarding designed for teams
              <br /> that value clarity, connection, and excellence
              <br /> from day one.
            </p>
            <div className={styles.btnDiv}>
              <button className={styles.btn} onClick={() => navigate("/login")}>
                Get started
              </button>
              <button className={styles.btn_2}>See Features</button>
            </div>
          </div>

          <div className={styles.img_grid}>
            <img className="hero_img-right" src="assets/Picture01.png" alt="" />

            <img className="hero_img-left" src="assets/Picture02.png" alt="" />
            <img className="hero_img-left" src="assets/Picture03.png" alt="" />

            <img className="hero_img-below" src="assets/Picture04.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.why_section}>
        <h2 className={styles.why_header}>Why Choose SmartStart?</h2>

        <div className={styles.why_box}>
          <div className={styles.why_card}>
            <img
              className={styles.why_cardIcon}
              src="assets/icon01.png"
              alt=""
            />
            <h2 className={styles.why_cardHeading}>Progress Trackers</h2>
            <p className={styles.why_cardPg}>
              See every step clearly. Track employee milestones in real time and
              celebrate growth from day one.
            </p>
          </div>

          <div className={styles.why_card}>
            <img
              className={styles.why_cardIcon}
              src="assets/icon02.png"
              alt=""
            />
            <h2 className={styles.why_cardHeading}>Personalised Checklists</h2>
            <p className={styles.why_cardPg}>
              Tailored journeys for every role. Create customized task lists
              that guide each new hire through what matters most
            </p>
          </div>

          <div className={styles.why_card}>
            <img
              className={styles.why_cardIcon}
              src="assets/icon03.png"
              alt=""
            />
            <h2 className={styles.why_cardHeading}>Fast Document Uploads</h2>
            <p className={styles.why_cardPg}>
              No delays. No Confusion. Upload, sign, and share onboarding
              documents securely in seconds
            </p>
          </div>
        </div>
      </section>

      <section className={styles.how_section}>
        <div className={styles.how_sectionDiv}>
          <img className={styles.how_pic} src="assets/howpic.png" alt="" />
          <div className={styles.how_div}>
            <h3 className={styles.how_heading}>How it works</h3>
            <p className={styles.how_pg}>Simple 4-Step Process</p>

            <div className={styles.how_step_div}>
              <div className={styles.how_step_col}>
                <span className={styles.how_step}>1</span>
                <div className={styles.how_step_line} />
              </div>
              <div>
                <h3 className={styles.how_step_heading}>Get Invited</h3>
                <p className={styles.how_step_pg}>
                  HR creates your account and sends a welcome link. Log in to
                  see your checklist.
                </p>
              </div>
            </div>

            <div className={styles.how_step_div}>
              <div className={styles.how_step_col}>
                <span className={styles.how_step}>2</span>
                <div className={styles.how_step_line} />
              </div>
              <div>
                <h3 className={styles.how_step_heading}>
                  Complete Your Checklist
                </h3>
                <p className={styles.how_step_pg}>
                  Follow role-based tasks with clear owners and due dates.
                </p>
              </div>
            </div>

            <div className={styles.how_step_div}>
              <div className={styles.how_step_col}>
                <span className={styles.how_step}>3</span>
                <div className={styles.how_step_line} />
              </div>
              <div>
                <h3 className={styles.how_step_heading}>Upload Documents</h3>
                <p className={styles.how_step_pg}>
                  Securely upload IDs and forms — HR gets them instantly.
                </p>
              </div>
            </div>

            <div className={styles.how_step_div}>
              <div className={styles.how_step_col}>
                <span className={styles.how_step}>4</span>
                <div className={styles.how_step_line} />
              </div>
              <div>
                <h3 className={styles.how_step_heading}>Track Your Progress</h3>
                <p className={styles.how_step_pg}>
                  See what’s done, what’s next, and how close you are to 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about_section}>
        <div className={styles.about_left}>
          <h1 className={styles.about_heading}>About Us</h1>
          <img
            className={styles.eclipse_one}
            src="assets/eclipse02.png"
            alt=""
          />
          <div className={styles.about_pg_div}>
            <div className={styles.eclipse_div}>
              <img
                className={styles.eclipse_two}
                src="assets/eclipse01.png"
                alt=""
              />
            </div>
            <p className={`${styles.about_pg} ${styles.one}`}>
              SmartStart is a digital onboarding platform that helps
              organizations streamline hiring, automate HR tasks, and support
              new hires with clear, guided experiences.
            </p>
            <img
              className={styles.eclipse_two_end}
              src="assets/eclipse02.png"
              alt=""
            />
            <p className={`${styles.about_pg} ${styles.two}`}>
              By combining secure e-signatures and smart checklists, SmartStart
              enables faster, more consistent onboarding experiences for every
              team.
            </p>
          </div>
          <h2 className={styles.about_heading_below}>
            Empowering teams from day one.
          </h2>
          <div className={styles.eclipse_group}>
            <img
              className={styles.eclipse_three_end}
              src="assets/eclipse02.png"
              alt=""
            />
            <img
              className={styles.eclipse_three}
              src="assets/eclipse02.png"
              alt=""
            />
          </div>
          <img
            className={styles.eclipse_last}
            src="assets/eclipse03.png"
            alt=""
          />
        </div>

        <div className={styles.about_image_wrap}>
          <img className={styles.about_img} src="assets/about.png" alt="" />
        </div>
      </section>

      <section className={styles.reimagining_section}>
        <div>
          <h1 className={styles.reimagining_heading}>
            Reimagining Onboarding for Modern Teams
          </h1>
          <p className={styles.reimagining_pg}>
            <span className={styles.reimagining_pg_diff}>SmartStart</span> makes
            it easy to create, track, and complete onboarding tasks—all in one
            place
          </p>
        </div>
      </section>

      <section className={styles.start_section}>
        <div className={styles.start_flex}>
          <div className={styles.start_img_div}>
            <img
              className={styles.start_img_one}
              src="assets/about01.png"
              alt=""
            />
            <img
              className={styles.start_img_two}
              src="assets/about02.png"
              alt=""
            />
          </div>
          <div className={styles.start_flex_right}>
            <h2 className={styles.start_heading}>
              Start Hiring and Onboarding Smarter Today
            </h2>
            <p className={styles.start_pg}>
              Make onboarding effortless for every team. Empower new hires,
              guide managers, and build lasting connections from day one.
            </p>
            <div className={styles.btnDiv}>
              <button className={styles.btn} onClick={() => navigate("/login")}>
                Get Started
              </button>
              <button className={styles.btn_2}>Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
