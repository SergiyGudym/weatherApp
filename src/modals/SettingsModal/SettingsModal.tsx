import { FunctionComponent } from "react";
import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";
import styles from "./SettingsModal.module.scss";

const SettingsModal: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

export default SettingsModal;
