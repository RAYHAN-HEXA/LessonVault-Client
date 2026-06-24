import React from "react";
import { Link } from "react-router";
import {
  Clock,
  ExternalLink,
  Lock,
  Sparkles,
  User,
  Crown,
  Gem,
  Eye,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";

const LessonCard = ({ lesson, isPremium }) => {
  const { COLORS } = useTheme();

  const isLessonPremium =
    lesson?.isPremium === true ||
    lesson?.isPremium === "true" ||
    lesson?.isPremiumAccess === true ||
    lesson?.isPremiumAccess === "true";

  const isUserPremium = isPremium === true;

  const isLocked = isLessonPremium && isUserPremium === false;

  return (
    <div
      className={`relative w-full max-w-md mx-auto rounded-3xl overflow-hidden transition-all duration-500 h-[520px] lg:h-[480px] group bg-white border border-[#E5ECE2] shadow-md hover:shadow-lg ${
        !isLocked ? "hover:-translate-y-1" : ""
      }`}
    >
      {!isLocked && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#2F8F3A]/5 via-transparent to-[#6E9277]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2F8F3A]/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </>
      )}

      {isLocked && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center backdrop-blur-xl"
          style={{ backgroundColor: "rgba(31, 77, 43, 0.95)" }}
        >
          <div
            className="p-5 rounded-3xl mb-6 shadow-2xl shadow-[#D9A441]/20"
            style={{
              background: "linear-gradient(135deg, #D9A441 0%, #C49431 100%)",
            }}
          >
            <Lock size={36} color="#1F4D2B" />
          </div>

          <h3 className="text-3xl font-serif font-bold mb-3 text-white bg-gradient-to-r from-[#D9A441] to-[#F8FAF6] bg-clip-text text-transparent">
            Premium Lesson
          </h3>

          <p className="text-[#6E9277] mb-8 max-w-xs leading-relaxed">
            This lesson is exclusive for premium members. Upgrade to unlock exclusive content.
          </p>

          <Link to="/payment">
            <button
              className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D9A441 0%, #C49431 100%)",
              }}
            >
              <span className="relative flex items-center gap-2 text-[#1F4D2B]">
                <Crown size={18} />
                Upgrade to View
              </span>
            </button>
          </Link>
        </div>
      )}

      <div
        className={`relative p-6 md:p-8 h-full flex flex-col ${
          isLocked
            ? "filter blur-sm grayscale opacity-50 pointer-events-none select-none"
            : ""
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#2F8F3A]/20 to-[#1F4D2B]/20 border border-[#2F8F3A]/30 text-[#1F4D2B]"
            >
              <Sparkles size={12} /> {lesson.category}
            </span>
          </div>

          {isLessonPremium ? (
            <span
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #D9A441 0%, #C49431 100%)",
                color: "#1F4D2B",
              }}
            >
              <Gem size={12} /> Premium
            </span>
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-[#2F8F3A]/20 text-[#2F8F3A] border border-[#2F8F3A]/30">
              Free
            </span>
          )}
        </div>

        <div className="mb-6 flex-grow">
          <h2
            className="text-2xl font-serif font-bold leading-tight mb-4 line-clamp-2 text-[#1F2937] group-hover:text-[#2F8F3A] transition-colors"
          >
            {lesson.title}
          </h2>

          <p className="text-[#6B7280] leading-relaxed line-clamp-3">
            {lesson.description}
          </p>
        </div>

        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5ECE2] text-sm text-[#6B7280] bg-[#EEF6EF] font-medium">
            {lesson.toneEmoji} {lesson.tone}
          </span>
        </div>

        <div className="pt-6 border-t border-[#E5ECE2]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-11 w-11 rounded-full overflow-hidden border-2 border-[#2F8F3A]/30 ring-2 ring-[#2F8F3A]/20"
              >
                {lesson.authorImage ? (
                  <img
                    src={lesson.authorImage}
                    alt={lesson.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#2F8F3A]/20 to-[#D9A441]/20 flex items-center justify-center text-[#6B7280]">
                    <User size={20} />
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs text-[#6B7280] uppercase font-bold tracking-wider">
                  Posted By
                </p>
                <p className="text-sm font-bold text-[#1F2937]">{lesson.name}</p>
                <span className="text-[#6B7280] text-xs flex items-center gap-1">
                  <Clock size={12} /> {new Date(lesson.postedAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <Link
              to={`/lesson-details/${lesson._id}`}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] text-white hover:shadow-lg hover:shadow-[#2F8F3A]/25 hover:scale-105 active:scale-95"
            >
              <Eye size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
