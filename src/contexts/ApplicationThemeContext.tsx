"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ApplicationThemeContext {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;

  toggleDarkMode(): void;
}

interface ApplicationThemeProviderProps {
  children: ReactNode;
}

export const ApplicationThemeContext = createContext(
  {} as ApplicationThemeContext
);

export function ApplicationThemeContextProvider({
  children,
}: ApplicationThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, [setIsDarkMode, isDarkMode]);

  return (
    <ApplicationThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,

        toggleDarkMode,
      }}
    >
      {children}
    </ApplicationThemeContext.Provider>
  );
}
