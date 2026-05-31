import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import DESIGN_SYSTEM from "../../../config/designSystem";

// Helper to get initial theme
const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme-mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme ? savedTheme === "dark" : prefersDark;
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Initialize dark mode preference from localStorage or system
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-mode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDarkMode(initialMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme-mode", newMode ? "dark" : "light");
  };

  const theme = isDarkMode ? DESIGN_SYSTEM.darkMode : DESIGN_SYSTEM.lightMode;

  // Backward compatibility colors
  const COLORS = {
    // New professional colors
    primary: DESIGN_SYSTEM.colors.primary,
    secondary: DESIGN_SYSTEM.colors.secondary,
    accent: DESIGN_SYSTEM.colors.accent,
    success: DESIGN_SYSTEM.colors.success,
    warning: DESIGN_SYSTEM.colors.warning,
    error: DESIGN_SYSTEM.colors.error,
    
    // Backward compatibility
    darkGreen: "#2563EB",
    sage: "#8B5CF6",
    mist: theme.surface,
    gold: "#EC4899",
    white: DESIGN_SYSTEM.colors.white,
    dark: DESIGN_SYSTEM.colors.gray[900],
    light: theme.surface,
  };

  const themeInfo = {
    COLORS,
    isDarkMode,
    toggleTheme,
    theme,
    designSystem: DESIGN_SYSTEM,
  };

  return <ThemeContext value={themeInfo}>{children}</ThemeContext>;
};

export default ThemeProvider;
