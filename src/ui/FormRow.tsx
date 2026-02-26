import type { formRowProps } from "../types";
import styles from "./FormRow.module.css";

function FormRow({ label, error, children }: formRowProps) {
  return (
    <div className={styles.inputField}>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormRow;
