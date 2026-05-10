/**
 * Professional Design System for DigitalLesson
 * Global UI Design Rules:
 * - 3 Primary Colors + Neutral
 * - Consistent spacing, typography, and components
 * - Light & Dark mode support with proper contrast
 */

export const DESIGN_SYSTEM = {
  // Primary Colors (3 colors maximum)
  colors: {
    primary: "#2563EB", // Professional Blue - Main CTA and accents
    secondary: "#8B5CF6", // Purple - Secondary actions and highlights
    accent: "#EC4899", // Pink - Tertiary accents and alerts

    // Semantic colors
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    // Neutral colors
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },

  // Light Mode Theme
  lightMode: {
    background: "#FFFFFF",
    surface: "#F9FAFB",
    surfaceAlt: "#F3F4F6",
    text: "#111827",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  },

  // Dark Mode Theme
  darkMode: {
    background: "#0F172A",
    surface: "#1E293B",
    surfaceAlt: "#334155",
    text: "#F1F5F9",
    textSecondary: "#CBD5E1",
    border: "#475569",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
  },

  // Typography
  typography: {
    fontFamily: {
      sans: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  // Spacing Scale
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.375rem",
    base: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  // Shadows
  shadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  // Transitions
  transition: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
  },

  // Breakpoints
  breakpoints: {
    xs: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Component Sizes
  components: {
    button: {
      height: {
        sm: "2.5rem",
        md: "3rem",
        lg: "3.5rem",
      },
      padding: {
        sm: "0.5rem 1rem",
        md: "0.75rem 1.5rem",
        lg: "1rem 2rem",
      },
    },
    card: {
      borderRadius: "1rem",
      padding: "1.5rem",
      shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    input: {
      height: "2.75rem",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem",
    },
  },
};

export default DESIGN_SYSTEM;
