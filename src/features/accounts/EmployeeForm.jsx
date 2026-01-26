import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";
import styles from "./admin.module.css";
import FormRow from "../../ui/FormRow";

function EmployeeForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { signUp, isSigningUp } = useSignUp();

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
        <FormRow label="Employee's Name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            placeholder="Doe corps"
            {...register("name", {
              required: "Please enter your full name",
            })}
          />
        </FormRow>

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

        <FormRow label="Role" error={errors?.role?.message}>
          <input
            type="text"
            id="role"
            placeholder="Employee"
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
          Sign Up
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

export default EmployeeForm;
