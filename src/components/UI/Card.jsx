import React from "react";

/**
 * Professional Card Component
 * Consistent styling, hover effects, and responsive design
 */
export const Card = React.forwardRef(
  ({ children, className = "", variant = "default", hoverable = true, ...props }, ref) => {
    const variants = {
      default: "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700",
      elevated: "bg-white dark:bg-slate-800 shadow-md hover:shadow-lg",
      outlined: "bg-transparent border-2 border-blue-500",
      filled: "bg-gray-50 dark:bg-slate-700",
    };

    const baseStyles =
      "rounded-xl transition-all duration-300 overflow-hidden";

    const hoverClass = hoverable ? "hover:shadow-lg hover:-translate-y-1" : "";

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/**
 * Card Header Component
 */
export const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b border-gray-200 dark:border-slate-700 ${className}`}>
    {children}
  </div>
);

/**
 * Card Body Component
 */
export const CardBody = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

/**
 * Card Footer Component
 */
export const CardFooter = ({ children, className = "" }) => (
  <div className={`p-6 border-t border-gray-200 dark:border-slate-700 flex gap-3 ${className}`}>
    {children}
  </div>
);

/**
 * Lesson Card - Standardized card for lessons with consistent styling
 */
export const LessonCard = ({
  image,
  title,
  description,
  category,
  author,
  rating,
  students,
  price,
  onViewDetails,
  isLoading = false,
  className = "",
}) => {
  if (isLoading) {
    return (
      <Card className={`h-96 animate-pulse ${className}`}>
        <div className="h-48 bg-gray-200 dark:bg-slate-700"></div>
        <CardBody>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded mb-3"></div>
          <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-2/3"></div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className={`h-96 flex flex-col overflow-hidden ${className}`} hoverable>
      {/* Image */}
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-slate-700">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
        )}
      </div>

      {/* Content */}
      <CardBody className="flex-1 flex flex-col justify-between">
        {/* Title */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h3>
            {category && (
              <span className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                {category}
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {description}
            </p>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          {author && <span>by {author}</span>}
          {rating && (
            <span className="flex items-center gap-1">
              ⭐ {rating} ({students} students)
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-slate-700">
          {price && (
            <span className="font-bold text-lg text-blue-600 dark:text-blue-400">
              ${price}
            </span>
          )}
          {onViewDetails && (
            <button
              onClick={onViewDetails}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
            >
              View Details →
            </button>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Card;
