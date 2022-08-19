import { FunctionComponent } from "react";
import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import useDateAndTime from "../../hooks/useTime";
import { useTranslation } from "react-i18next";
import { Howl, Howler } from "howler";
import styles from "./Wish.module.scss";

const Wish: FunctionComponent = () => {
  const { wish } = useDateAndTime();
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  const handleClick = () => {
    if (i18n.language !== "uk") return;

    var sound = new Howl({
      src: ["hello.mp3"],
    });

    Howler.volume(1);
    sound.play();
  };

  return (
    <div
      className={`${styles.wrapper} ${
        theme === Themes.dark ? styles.dark : ""
      }`}
    >
      <div className={styles.wish} onClick={handleClick}>
        {wish}
      </div>
    </div>
  );
};

export default Wish;
