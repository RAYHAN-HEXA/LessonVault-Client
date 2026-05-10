import useTheme from "../../hooks/useTheme";

const SkeletonCard = ({ cardCount = 4 }) => {
  const { isDarkMode } = useTheme();

  const shimmerClass = isDarkMode
    ? "animate-pulse bg-slate-700"
    : "animate-pulse bg-gray-200";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(cardCount)].map((_, index) => (
        <div
          key={index}
          className={`rounded-2xl overflow-hidden shadow-lg ${
            isDarkMode ? "bg-slate-800" : "bg-white"
          }`}
        >
          {/* Image skeleton */}
          <div className={`h-48 w-full ${shimmerClass}`}></div>

          {/* Content skeleton */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <div className={`h-6 w-3/4 rounded-lg ${shimmerClass}`}></div>

            {/* Description */}
            <div className="space-y-2">
              <div className={`h-4 w-full rounded ${shimmerClass}`}></div>
              <div className={`h-4 w-5/6 rounded ${shimmerClass}`}></div>
            </div>

            {/* Meta info */}
            <div className="flex items-center justify-between pt-2">
              <div className={`h-4 w-20 rounded ${shimmerClass}`}></div>
              <div className={`h-8 w-28 rounded-lg ${shimmerClass}`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;