import { createContext, useEffect, useState } from "react";
import { themaTypes } from "../config/theme.config";
import { getLocalStorage, setLocalStorage } from "../lib/ls";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themaTypes.system);

  // Set the theme to the system theme on page load
  const getSystemTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(themaTypes.dark);
    } else {
      setTheme(themaTypes.light);
    }
  };

  //handle theme change on system theme change
  const handleEventChangeMatchMedia = (e) =>
    e.matches ? setTheme(themaTypes.dark) : setTheme(themaTypes.light);

  //Toggle theme mode
  const handleToggleThemeMode = () =>
    setTheme(theme === themaTypes.dark ? themaTypes.light : themaTypes.dark);

  useEffect(() => {
    if (getLocalStorage("theme")) {
      console.log(getLocalStorage("theme"));
      setTheme(getLocalStorage("theme"));
    } else {
      getSystemTheme();

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", handleEventChangeMatchMedia);
    }

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleEventChangeMatchMedia);
    };
  }, []);

  useEffect(() => {
    if (theme === themaTypes.dark) {
      document.body.classList.add("dark");
      setLocalStorage("theme", themaTypes.dark);
    } else {
      document.body.classList.remove("dark");
      setLocalStorage("theme", themaTypes.light);
    }
  }, [theme]);

  const value = {
    theme,
    handleToggleThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
