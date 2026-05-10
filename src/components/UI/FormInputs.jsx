import React from "react";

/**
 * Professional Input Component
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
        "border border-gray-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white",
      filled:
        "bg-gray-100 dark:bg-slate-700 border-0 focus:bg-gray-50 dark:focus:bg-slate-600 text-gray-900 dark:text-white",
    };

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-red-600">*</span>}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={18} />
          )}

          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={`
              w-full px-4 py-2.5 rounded-lg text-sm
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              disabled:opacity-50 disabled:cursor-not-allowed
              ${Icon ? "pl-10" : ""}
              ${variants[variant]}
              ${error ? "border-red-500 dark:border-red-400" : ""}
            `}
            {...props}
          />
        </div>

        {error && <p className="text-red-600 dark:text-red-400 text-xs mt-1">{error}</p>}
        {hint && <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

/**
 * Professional Textarea Component
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-red-600">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          disabled={disabled}
          rows={rows}
          className={`
            w-full px-4 py-2.5 rounded-lg text-sm
            border border-gray-300 dark:border-slate-600
            bg-white dark:bg-slate-800
            text-gray-900 dark:text-white
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            resize-none
            ${error ? "border-red-500 dark:border-red-400" : ""}
          `}
          {...props}
        />

        {error && <p className="text-red-600 dark:text-red-400 text-xs mt-1">{error}</p>}
        {hint && <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

/**
 * Professional Select Component
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-red-600">*</span>}
          </label>
        )}

        <select
          ref={ref}
          disabled={disabled}
          className={`
            w-full px-4 py-2.5 rounded-lg text-sm
            border border-gray-300 dark:border-slate-600
            bg-white dark:bg-slate-800
            text-gray-900 dark:text-white
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-red-500 dark:border-red-400" : ""}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <p className="text-red-600 dark:text-red-400 text-xs mt-1">{error}</p>}
        {hint && <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

/**
 * Badge Component
 */
export const Badge = ({ children, variant = "default", size = "md" }) => {
  const variants = {
    default: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    success: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    warning: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    error: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
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
 * Alert Component
 */
export const Alert = ({ children, variant = "info", closeable = false, onClose }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const variants = {
    info: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    success:
      "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
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
          className="ml-4 text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Input;
