import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import constants from "utils/constants";
import styles from "./Footer.module.scss";

const Footer: FunctionComponent = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.footerWrapper} ${
        theme === Themes.dark ? styles.dark : ""
      }`}
    >
      {t("created")}&nbsp;
      <a href={constants.githubLink} target="_blank" rel="noreferrer">
        {t("name")}
      </a>
    </div>
  );
};

export default Footer;
