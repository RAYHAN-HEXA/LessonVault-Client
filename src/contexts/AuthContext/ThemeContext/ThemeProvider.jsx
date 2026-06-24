import React, { useState } from "react";
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

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme-mode", newMode ? "dark" : "light");
  };

  const theme = isDarkMode ? DESIGN_SYSTEM.darkMode : DESIGN_SYSTEM.lightMode;

  // Lessonly color palette - White + Green
  const COLORS = {
    // Primary colors
    primary: DESIGN_SYSTEM.colors.primary,        // #2F8F3A
    primaryHover: DESIGN_SYSTEM.colors.primaryHover, // #23722D
    primaryLight: DESIGN_SYSTEM.colors.primaryLight, // #6E9277
    secondary: DESIGN_SYSTEM.colors.secondary,    // #D9A441 Gold
    accent: DESIGN_SYSTEM.colors.accent,          // #C9D8C5
    darkForest: DESIGN_SYSTEM.colors.darkGreen,   // #1F4D2B

    // Semantic colors
    success: DESIGN_SYSTEM.colors.success,
    warning: DESIGN_SYSTEM.colors.warning,
    error: DESIGN_SYSTEM.colors.error,
    info: DESIGN_SYSTEM.colors.info,

    // Neutral colors
    white: DESIGN_SYSTEM.colors.white,
    black: DESIGN_SYSTEM.colors.black,
    dark: DESIGN_SYSTEM.colors.gray[700],
    light: theme.surface,

    // Theme-specific colors
    background: theme.background,
    surface: theme.surface,
    surfaceAlt: theme.surfaceAlt,
    text: theme.text,
    textSecondary: theme.textSecondary,
    border: theme.border,
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
