import { useForm } from "react-hook-form";
import styles from "./admin.module.css";
import { useSignUp } from "./useSignUp";
import FormRow from "../../ui/FormRow";

function AdminForm() {
  const { signUp, isSigningUp } = useSignUp();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, role } = data;
    const userData = {
      name,
      email,
      password,
      role,
    };
    signUp(userData);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email Address" error={errors?.email?.message}>
          <input
            disabled={isSigningUp}
            type="email"
            id="email"
            placeholder="name@gmail.com"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
        </FormRow>

        <FormRow label="Company Name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            placeholder="Doe corps"
            {...register("name", {
              required: "Company name is required",
            })}
          />
        </FormRow>

        <FormRow label="Role" error={errors?.role?.message}>
          <input
            type="text"
            id="role"
            placeholder="HR Manager"
            {...register("role", {
              required: "role is required",
            })}
          />
        </FormRow>

        <FormRow label="Enter password" error={errors?.password?.message}>
          <input
            type="password"
            id="Password"
            placeholder="Enter password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 7,
                message: "password must be at least 7 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Confirm password"
          error={errors?.confirmPassword?.message}
        >
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
        </FormRow>

        <button type="submit" className={styles.btn} disabled={isSigningUp}>
          {isSigningUp ? "Please wait" : "Sign Up"}
        </button>
      </form>

      <p className={styles.signUp}>
        or continue with
        <a data-route="google.email" href="google.email">
          Google
        </a>
      </p>
    </>
  );
}

export default AdminForm;
