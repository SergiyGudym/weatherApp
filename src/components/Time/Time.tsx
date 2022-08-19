import { FunctionComponent } from "react";
import useTime from "hooks/useTime";
import styles from "./Time.module.scss";
import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";

const Time: FunctionComponent = () => {
  const { time } = useTime();
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.time} ${theme === Themes.dark ? styles.dark : ""}`}
    >
      {time}
    </div>
  );
};

export default Time;
