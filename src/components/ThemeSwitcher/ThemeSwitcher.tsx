import styles from "./ThemeSwitcher.module.scss";
import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import { useTranslation } from "react-i18next";

const ThemeSwitcher: React.FC<{}> = () => {
  const { theme, switchTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`whiteColor pointer ${styles.wrapper}`}
      onClick={switchTheme}
    >
      <div
        className={`${styles.container} ${
          theme === Themes.light ? styles.light : styles.dark
        }`}
      >
        <div
          className={`${styles.label} ${
            theme === Themes.light ? styles.light : styles.dark
          }`}
        ></div>
        <div
          className={`${styles.lightText} ${
            theme === Themes.light ? styles.light : styles.dark
          }`}
        >
          {t("themes.light")}
        </div>
        <div
          className={`${styles.darkText} ${
            theme === Themes.light ? styles.light : styles.dark
          }`}
        >
          {t("themes.dark")}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
