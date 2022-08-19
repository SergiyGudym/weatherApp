import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import constants from "utils/constants";
import images from "utils/images";
import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher: FunctionComponent = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const stopWar = () => {
    window.open(constants.russiaIsATerroristState, "_blank");
    changeLanguage("uk");
  };

  return (
    <div className={styles.languagesContainer}>
      {constants.languages.map((language, index, arr) => (
        <button
          onClick={() => {
            changeLanguage(language.name);
          }}
          className={styles.languageButton}
        >
          <img
            src={language.icon}
            alt={language.name}
            className={styles.languageIcon}
          />
        </button>
      ))}
      <button onClick={stopWar} className={styles.languageButton}>
        <img
          src={images.languages.orcs}
          alt="orcs"
          className={styles.languageIcon}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
