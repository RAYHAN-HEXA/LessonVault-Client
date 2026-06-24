import React from "react";

/**
 * LessonVault Card Component
 * Clean Modern SaaS Style with Green theme
 */
export const Card = React.forwardRef(
  ({ children, className = "", variant = "default", hoverable = true, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-[#E5ECE2]",
      elevated: "bg-white shadow-md hover:shadow-lg",
      outlined: "bg-transparent border-2 border-[#2F8F3A]",
      filled: "bg-[#F8FAF6]",
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
  <div className={`p-6 border-b border-[#E5ECE2] ${className}`}>
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
  <div className={`p-6 border-t border-[#E5ECE2] flex gap-3 ${className}`}>
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
        <div className="h-48 bg-[#F8FAF6]"></div>
        <CardBody>
          <div className="h-4 bg-[#F8FAF6] rounded mb-3"></div>
          <div className="h-3 bg-[#F8FAF6] rounded w-2/3"></div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className={`h-96 flex flex-col overflow-hidden ${className}`} hoverable>
      {/* Image */}
      <div className="h-48 overflow-hidden bg-[#F8FAF6]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2F8F3A] to-[#1F4D2B]"></div>
        )}
      </div>

      {/* Content */}
      <CardBody className="flex-1 flex flex-col justify-between">
        {/* Title */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-[#1F2937] line-clamp-2">
              {title}
            </h3>
            {category && (
              <span className="text-xs font-semibold bg-[#2F8F3A]/10 text-[#1F4D2B] px-2 py-1 rounded-full whitespace-nowrap ml-2">
                {category}
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-sm text-[#6B7280] line-clamp-2 mb-3">
              {description}
            </p>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-[#6B7280] mb-3">
          {author && <span>by {author}</span>}
          {rating && (
            <span className="flex items-center gap-1">
              ⭐ {rating} ({students} students)
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E5ECE2]">
          {price && (
            <span className="font-bold text-lg text-[#2F8F3A]">
              ${price}
            </span>
          )}
          {onViewDetails && (
            <button
              onClick={onViewDetails}
              className="text-[#2F8F3A] hover:text-[#1F4D2B] font-medium text-sm transition-colors"
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
