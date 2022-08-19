import React, {
  Context,
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
} from "react";
import useLocalStorage from "use-local-storage";

interface ThemeContextInterface {
  theme: string;
  switchTheme: () => void;
}

interface ThemeProviderInterface {
  children: ReactNode;
}

export enum Themes {
  light = "light",
  dark = "dark",
}

export const ThemeContext: Context<ThemeContextInterface> =
  createContext<ThemeContextInterface>({
    theme: Themes.light,
    switchTheme: () => {},
  });

const ThemeProvider: FunctionComponent<ThemeProviderInterface> = ({
  children,
}) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? Themes.dark : Themes.light
  );

  const switchTheme = () => {
    const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
