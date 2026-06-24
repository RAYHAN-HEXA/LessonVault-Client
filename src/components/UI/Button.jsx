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
        "bg-[#2F8F3A] text-white hover:bg-[#23722D] focus:ring-[#2F8F3A] shadow-md hover:shadow-lg",
      secondary:
        "bg-[#EEF6EF] text-[#2F8F3A] hover:bg-[#C9D8C5] focus:ring-[#2F8F3A] shadow-sm",
      accent:
        "bg-[#C9D8C5] text-[#1F4D2B] hover:bg-[#6E9277] focus:ring-[#6E9277] shadow-sm",
      outline:
        "border-2 border-[#2F8F3A] text-[#2F8F3A] hover:bg-[#EEF6EF] focus:ring-[#2F8F3A]",
      ghost:
        "text-[#2F8F3A] hover:bg-[#EEF6EF] focus:ring-[#2F8F3A]",
      danger:
        "bg-[#D9534F] text-white hover:bg-[#c9433f] focus:ring-[#D9534F]",
      success:
        "bg-[#2F8F3A] text-white hover:bg-[#23722D] focus:ring-[#2F8F3A]",
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
