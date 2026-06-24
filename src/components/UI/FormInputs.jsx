import React from "react";

/**
 * LessonVault Input Component
 * Clean Modern SaaS Style with Green theme
 */
export const Input = React.forwardRef(
  (
    {
      label,
      error,
      hint,
      icon: Icon,
      disabled = false,
      type = "text",
      variant = "default",
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const variants = {
      default:
        "border border-[#E5ECE2] focus:border-[#2F8F3A] bg-white text-[#1F2937]",
      filled:
        "bg-[#F8FAF6] border-0 focus:bg-white text-[#1F2937]",
    };

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            {label}
            {props.required && <span className="text-[#D9534F]">*</span>}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-3 text-[#6B7280]" size={18} />
          )}

          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={`
              w-full px-4 py-2.5 rounded-lg text-sm
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#2F8F3A] focus:ring-opacity-20
              disabled:opacity-50 disabled:cursor-not-allowed
              ${Icon ? "pl-10" : ""}
              ${variants[variant]}
              ${error ? "border-[#D9534F]" : ""}
            `}
            {...props}
          />
        </div>

        {error && <p className="text-[#D9534F] text-xs mt-1">{error}</p>}
        {hint && <p className="text-[#6B7280] text-xs mt-1">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

/**
 * LessonVault Textarea Component
 */
export const Textarea = React.forwardRef(
  (
    {
      label,
      error,
      hint,
      rows = 4,
      disabled = false,
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            {label}
            {props.required && <span className="text-[#D9534F]">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          disabled={disabled}
          rows={rows}
          className={`
            w-full px-4 py-2.5 rounded-lg text-sm
            border border-[#E5ECE2]
            bg-white
            text-[#1F2937]
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[#2F8F3A] focus:ring-opacity-20
            focus:border-[#2F8F3A]
            disabled:opacity-50 disabled:cursor-not-allowed
            resize-none
            ${error ? "border-[#D9534F]" : ""}
          `}
          {...props}
        />

        {error && <p className="text-[#D9534F] text-xs mt-1">{error}</p>}
        {hint && <p className="text-[#6B7280] text-xs mt-1">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

/**
 * LessonVault Select Component
 */
export const Select = React.forwardRef(
  (
    {
      label,
      error,
      hint,
      options = [],
      disabled = false,
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            {label}
            {props.required && <span className="text-[#D9534F]">*</span>}
          </label>
        )}

        <select
          ref={ref}
          disabled={disabled}
          className={`
            w-full px-4 py-2.5 rounded-lg text-sm
            border border-[#E5ECE2]
            bg-white
            text-[#1F2937]
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[#2F8F3A] focus:ring-opacity-20
            focus:border-[#2F8F3A]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-[#D9534F]" : ""}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <p className="text-[#D9534F] text-xs mt-1">{error}</p>}
        {hint && <p className="text-[#6B7280] text-xs mt-1">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

/**
 * LessonVault Badge Component
 */
export const Badge = ({ children, variant = "default", size = "md" }) => {
  const variants = {
    default: "bg-[#2F8F3A]/10 text-[#1F4D2B] border border-[#2F8F3A]/20",
    success: "bg-[#2F8F3A]/10 text-[#1F4D2B] border border-[#2F8F3A]/20",
    warning: "bg-[#D9A441]/10 text-[#1F4D2B] border border-[#D9A441]/20",
    error: "bg-[#D9534F]/10 text-[#D9534F] border border-[#D9534F]/20",
    premium: "bg-[#D9A441]/10 text-[#1F4D2B] border border-[#D9A441]/20",
    light: "bg-[#6E9277] text-[#1F4D2B]",
  };

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
};

/**
 * LessonVault Alert Component
 */
export const Alert = ({ children, variant = "info", closeable = false, onClose }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const variants = {
    info: "bg-[#2F8F3A]/10 border border-[#2F8F3A]/20 text-[#1F2937]",
    success:
      "bg-[#2F8F3A]/10 border border-[#2F8F3A]/20 text-[#1F2937]",
    warning:
      "bg-[#D9A441]/10 border border-[#D9A441]/20 text-[#1F2937]",
    error:
      "bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F]",
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <div className={`p-4 rounded-lg flex items-start justify-between ${variants[variant]}`}>
      <div className="flex-1">{children}</div>
      {closeable && (
        <button
          onClick={handleClose}
          className="ml-4 text-xl font-medium opacity-70 hover:opacity-100 transition-opacity"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Input;
