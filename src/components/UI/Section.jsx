import React from "react";

/**
 * Professional Section Wrapper
 * Provides consistent spacing, max-width, and styling
 */
export const Section = ({
  children,
  className = "",
  containerClassName = "",
  bgVariant = "light",
  padding = "lg",
}) => {
  const bgVariants = {
    light: "bg-white dark:bg-slate-800",
    gray: "bg-gray-50 dark:bg-slate-900",
    primary: "bg-blue-50 dark:bg-blue-900/10",
    secondary: "bg-purple-50 dark:bg-purple-900/10",
  };

  const paddingClass = {
    sm: "py-8 px-4",
    md: "py-12 px-4",
    lg: "py-16 px-4",
    xl: "py-24 px-4",
  };

  return (
    <section className={`${bgVariants[bgVariant]} ${paddingClass[padding]} ${className}`}>
      <div
        className={`max-w-7xl mx-auto ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

/**
 * Section Header Component
 */
export const SectionHeader = ({
  title,
  subtitle,
  description,
  center = true,
  className = "",
}) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-12 ${className}`}>
      {subtitle && (
        <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

/**
 * Grid Layout Component
 */
export const Grid = ({
  children,
  columns = { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 },
  gap = "md",
  className = "",
}) => {
  const gaps = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-10",
  };

  const gridClass = `
    grid
    grid-cols-${columns.xs}
    sm:grid-cols-${columns.sm}
    md:grid-cols-${columns.md}
    lg:grid-cols-${columns.lg}
    xl:grid-cols-${columns.xl}
    ${gaps[gap]}
  `;

  return (
    <div className={`${gridClass} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Container Component
 */
export const Container = ({ children, size = "lg", className = "" }) => {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-4 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Divider Component
 */
export const Divider = ({ className = "" }) => (
  <div className={`h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent ${className}`} />
);

/**
 * Spacer Component
 */
export const Spacer = ({ size = "md", className = "" }) => {
  const sizes = {
    xs: "h-2",
    sm: "h-4",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
    "2xl": "h-24",
  };

  return <div className={`${sizes[size]} ${className}`} />;
};

export default Section;
