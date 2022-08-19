import { FunctionComponent } from "react";
import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import images from "utils/images";
import styles from "./Logo.module.scss";

const Logo: FunctionComponent = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.logoContainer}>
      <img
        src={images.logos[theme as Themes]}
        className={styles.logo}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
