import Time from "components/Time/Time";
import Logo from "components/Logo/Logo";
import styles from "./Header.module.scss";
import SettingsButton from "components/SettingsButton/SettingsButton";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <Time />
      </div>
      <div className={`${styles.headerContainer} ${styles.middle}`}>
        <Logo />
      </div>
      <div className={`${styles.headerContainer} ${styles.last}`}>
        <SettingsButton />
      </div>
    </div>
  );
};

export default Header;
