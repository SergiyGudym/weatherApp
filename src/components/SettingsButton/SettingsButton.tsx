import { useAlert } from "context/AlertProvider/AlertProvider";
import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import SettingsModal from "modals/SettingsModal/SettingsModal";
import { FunctionComponent } from "react";
import images from "utils/images";
import styles from "./SettingsButton.module.scss";

const SettingsButton: FunctionComponent = () => {
  const { theme } = useTheme();
  const { show } = useAlert();

  const showModal = () => {
    show(<SettingsModal />);
  };

  return (
    <button className={styles.settingsButton} onClick={showModal}>
      <img src={images.settings[theme as Themes]} alt="Settings" />
    </button>
  );
};

export default SettingsButton;
