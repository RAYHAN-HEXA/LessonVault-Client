import React from "react";
import DESIGN_SYSTEM from "../../config/designSystem";

/**
 * Professional Button Component
 * Supports multiple variants, sizes, states
 */
export const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled = false,
      isLoading = false,
      icon: Icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg",
      secondary:
        "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-md hover:shadow-lg",
      accent:
        "bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500 shadow-md hover:shadow-lg",
      outline:
        "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
      ghost:
        "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
      danger:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm h-9",
      md: "px-4 py-2 text-base h-11",
      lg: "px-6 py-3 text-lg h-13",
    };

    const sizeClass = sizes[size] || sizes.md;
    const variantClass = variants[variant] || variants.primary;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantClass} ${sizeClass} ${
          fullWidth ? "w-full" : ""
        }`}
        {...props}
      >
        {isLoading && (
          <span className="inline-block animate-spin">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </span>
        )}
        {Icon && iconPosition === "left" && <Icon size={18} />}
        {children}
        {Icon && iconPosition === "right" && <Icon size={18} />}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
