import styles from "./Header.module.scss";
import { formatDate } from "../../helpers/formatDate";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["title"]}>News React App</h1>
      <p className={styles["date"]}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
