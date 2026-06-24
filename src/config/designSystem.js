/**
 * LessonVault Design System
 * Digital Life Lessons Platform - Clean Modern SaaS Style
 * White background with soft green / sage green theme
 */

export const DESIGN_SYSTEM = {
  // Primary Colors - Green Palette
  colors: {
    primary: "#2F8F3A",      // Primary Green
    primaryHover: "#23722D",  // Primary Hover (darker green)
    primaryLight: "#6E9277",  // Soft Sage Green
    secondary: "#D9A441",     // Warning/Gold for premium highlights
    accent: "#C9D8C5",        // Light Green Accent
    darkGreen: "#1F4D2B",     // Dark Forest Green

    // Semantic colors
    success: "#2F8F3A",       // Success (green)
    warning: "#D9A441",       // Warning (gold)
    error: "#D9534F",         // Error (red)
    info: "#6E9277",          // Info (sage green)

    // Neutral colors
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      50: "#F8FAF6",          // Section Background (soft green tint)
      100: "#EEF6EF",         // Soft Green Background
      200: "#E5ECE2",         // Border Color
      300: "#DDE8DA",         // Soft Border
      400: "#C9D8C5",         // Light Green Accent
      500: "#6B7280",         // Secondary Text
      600: "#8A8F98",         // Muted Text
      700: "#1F2937",         // Main Text
      800: "#1F4D2B",         // Dark Forest Green
      900: "#111111",         // Near Black
    },
  },

  // Light Mode Theme (Default - Clean White + Green)
  lightMode: {
    background: "#FFFFFF",     // Main Background
    surface: "#FFFFFF",         // Card Background
    surfaceAlt: "#F8FAF6",     // Section Background
    text: "#1F2937",           // Main Text
    textSecondary: "#6B7280",  // Secondary Text
    border: "#E5ECE2",         // Border Color
    shadow: "0 1px 3px rgba(31, 77, 43, 0.06), 0 1px 2px rgba(31, 77, 43, 0.03)",
  },

  // Dark Mode Theme (Optional - green dark mode)
  darkMode: {
    background: "#1F2937",
    surface: "#1F4D2B",
    surfaceAlt: "#2F8F3A",
    text: "#FFFFFF",
    textSecondary: "#C9D8C5",
    border: "#23722D",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
  },

  // Typography
  typography: {
    fontFamily: {
      sans: "'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
      serif: "'PT Serif', 'Georgia', serif",
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
    xl: "1.25rem",
    "2xl": "1.5rem",
    full: "9999px",
  },

  // Shadows (soft green-tinted)
  shadow: {
    sm: "0 1px 2px rgba(31, 77, 43, 0.04)",
    base: "0 1px 3px rgba(31, 77, 43, 0.06), 0 1px 2px rgba(31, 77, 43, 0.03)",
    md: "0 4px 6px rgba(31, 77, 43, 0.06), 0 2px 4px rgba(31, 77, 43, 0.03)",
    lg: "0 10px 15px rgba(31, 77, 43, 0.06), 0 4px 6px rgba(31, 77, 43, 0.03)",
    xl: "0 20px 25px rgba(31, 77, 43, 0.06), 0 10px 10px rgba(31, 77, 43, 0.03)",
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
      shadow: "0 1px 3px rgba(31, 77, 43, 0.06), 0 1px 2px rgba(31, 77, 43, 0.03)",
    },
    input: {
      height: "2.75rem",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem",
    },
  },
};

export default DESIGN_SYSTEM;
