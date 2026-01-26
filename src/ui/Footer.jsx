import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerFlex}>
        <div className={styles.leftFooterSection}>
          <div className={styles.footerFirstLeft}>
            <div className={styles.imgCon}>
              <img
                className={styles.footer_logo}
                src="assets/logo-without-name.png"
                alt=""
              />
              <h1 className="text-2xl ml-1">Smartstart</h1>
            </div>

            <p className={styles.footer_pg}>
              SmartStart makes recruitment and onboarding seamless with digital
              workflows, automation and personalized employee experiences - all
              accessible from any mobile device.
            </p>

            <div className={styles.footer_socials}>
              <a className={styles.footer_sociallink} href="facebook.com">
                <FaFacebook
                  className={`${styles.footer_social_image} text-blue-900`}
                />
              </a>
              <a className={styles.footer_sociallink} href="linkedin.com">
                <FaLinkedin
                  className={`${styles.footer_social_image} text-blue-900`}
                />
              </a>
              <a className={styles.footer_sociallink} href="twitter.com">
                <FaX
                  className={`${styles.footer_social_image} text-blue-900`}
                />
              </a>
              <a className={styles.footer_sociallink} href="instagram.com">
                <FaInstagram
                  className={`${styles.footer_social_image} text-blue-900`}
                />
              </a>
            </div>
          </div>

          <div className={styles.footer_last_left}>
            <h1 className="footer_heading-middle">GET IN TOUCH</h1>

            <div className={styles.info_div}>
              <img className="info" src="assets/location.png" alt="" />
              <p className="info_pg">
                123, SmartStart Avenue, Lagos State, Nigeria
              </p>
            </div>

            <div className={styles.contact_flex}>
              <div className={styles.info_div}>
                <img className="info" src="assets/message.png" alt="" />
                <p className="info_pg">SmartStart@gmail.com</p>
              </div>

              <div className={styles.info_div}>
                <img className="info" src="assets/call.png" alt="" />
                <p className="info_pg">+23481234567890</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightFooterSection}>
          <div className={styles.footer_listContainer}>
            <div>
              <h1 className={styles.footer_heading}>PRODUCT</h1>
              <ul>
                <li>Dashboard</li>
                <li>SmartChecklist</li>
                <li>SmartDocs</li>
                <li>SmartProgress</li>
              </ul>
            </div>

            <div>
              <h1 className={styles.footer_heading}>QUICK LINKS</h1>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/features">Features</NavLink>
                </li>
                <li>
                  <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footer_newsletter}>
            <h1 className={styles.footer_heading}>
              SUBSCRIBE TO OUR NEWS LETTER
            </h1>
            <form className={styles.newsletter_form}>
              <input
                type="email"
                placeholder="Enter email address"
                className={styles.newsletter_input}
              />
              <button type="submit" className={styles.newsletter_btn}>
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_left}>
          <p>Privacy Policy</p>
          <span className={styles.divider}></span>
          <p>Terms Of Use</p>
        </div>
        <p className={styles.footer_right_text}>
          © 2025 SmartStart, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
