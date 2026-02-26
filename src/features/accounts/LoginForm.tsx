import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { useState } from "react";
import { useLogin } from "./useLogin";
import GoogleBtn from "../../ui/GoogleBtn";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { logIn, isLoggingIn } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email && !password) return null;
    logIn({ email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginPanel}>
        <div className={styles.logo}>
          <img src="assets\smartstart-logo-orig.png" alt="Smartstart Logo" />
        </div>
        <h1 className={styles.heading}>Welcome Back!</h1>
        <p className={styles.subtitle}>
          Sign in to your account with your details
        </p>
        <div className={styles.googleLogin}>
          <GoogleBtn />
        </div>

        <div className={styles.divider_div}>
          <img className={styles.divider} src="assets/divider.png" alt="" />
          <p>Or Login with email</p>
          <img className={styles.divider} src="assets/divider.png" alt="" />
        </div>
        <form
          className={styles.loginForm}
          id="loginForm"
          onSubmit={handleSubmit}
        >
          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.form_footer}>
            <div className={styles.keep_logged_in}>
              <input type="checkbox" id="keep" name="keep" />
              <label htmlFor="keep" className={styles.keep}>
                Keep me logged in
              </label>
            </div>
            <Link to="/" className={styles.forgot_password}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className={styles.logBtn}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Please wait" : "Log In"}
          </button>
        </form>
        <p className={styles.sign_up_prompt}>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.signUp}>
            Sign up
          </Link>
        </p>
      </div>

      <div className={styles.image_panel}>
        <img src="assets/login-image.png" alt="" />
      </div>
    </div>
  );
}

export default LoginForm;
