import { Themes, useTheme } from "context/ThemeProvider/ThemeProvider";
import { FunctionComponent, ReactNode } from "react";
import styles from "./AppWrapper.module.scss";

interface AppWrapperInterface {
  children: ReactNode;
}

const AppWrapper: FunctionComponent<AppWrapperInterface> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.appWrapper} ${
        theme === Themes.dark ? styles.dark : ""
      }`}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
