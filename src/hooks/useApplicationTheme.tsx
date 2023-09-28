import { useContext } from "react";

import { ApplicationThemeContext } from "@contexts/ApplicationThemeContext";

export const useApplicationTheme = () => {
  return useContext(ApplicationThemeContext);
};
