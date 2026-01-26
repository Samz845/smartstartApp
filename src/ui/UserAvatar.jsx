import { useUser } from "../features/accounts/useUser";
import styles from "./UserAvatar.module.css";
function UserAvatar() {
  const { user, isLoading } = useUser();
  return (
    <div className={styles.user}>
      <p>{isLoading ? "loading user" : user?.name}</p>
    </div>
  );
}

export default UserAvatar;
