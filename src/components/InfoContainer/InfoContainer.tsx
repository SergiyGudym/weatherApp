import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import styles from "./InfoContainer.module.scss";

const InfoContainer: FunctionComponent = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.infoContainer} ${
        theme === Themes.dark ? styles.dark : ""
      }`}
    >
      {t("info.question")}
      <br />
      {t("info.hint")}
    </div>
  );
};

export default InfoContainer;
