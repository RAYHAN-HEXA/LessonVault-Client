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
  Heart,
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
      className={`relative w-full max-w-md mx-auto rounded-3xl overflow-hidden transition-all duration-500 h-[520px] lg:h-[480px] group ${
        isLocked
          ? "bg-slate-900/50 border border-white/10"
          : "bg-slate-900/50 border border-white/10 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2"
      }`}
    >
      {/* Gradient background effect */}
      {!isLocked && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </>
      )}

      {/* PREMIUM LOCK SCREEN */}
      {isLocked && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center backdrop-blur-xl"
          style={{ backgroundColor: "rgba(2, 6, 23, 0.9)" }}
        >
          <div
            className="p-5 rounded-3xl mb-6 shadow-2xl shadow-fuchsia-500/20"
            style={{
              background: "linear-gradient(135deg, #D4C5A8 0%, #C3B08D 100%)",
            }}
          >
            <Lock size={36} color="#1A2F23" />
          </div>

          <h3 className="text-3xl font-serif font-bold mb-3 text-white bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Premium Lesson
          </h3>

          <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
            This lesson is exclusive for premium members. Upgrade to unlock exclusive content.
          </p>

          <Link to="/payment">
            <button
              className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D4C5A8 0%, #C3B08D 100%)",
              }}
            >
              <span className="relative flex items-center gap-2 text-[#1A2F23]">
                <Crown size={18} />
                Upgrade to View
              </span>
            </button>
          </Link>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div
        className={`relative p-6 md:p-8 h-full flex flex-col ${
          isLocked
            ? "filter blur-sm grayscale opacity-50 pointer-events-none select-none"
            : ""
        }`}
      >
        {/* Header - Category & Date */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 text-violet-300"
            >
              <Sparkles size={12} /> {lesson.category}
            </span>
          </div>

          {/* Access Badge */}
          {isLessonPremium ? (
            <span
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #D4C5A8 0%, #C3B08D 100%)",
                color: "#1A2F23",
              }}
            >
              <Gem size={12} /> Premium
            </span>
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Free
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="mb-6 flex-grow">
          <h2
            className="text-2xl font-serif font-bold leading-tight mb-4 line-clamp-2 text-white group-hover:text-violet-300 transition-colors"
          >
            {lesson.title}
          </h2>

          <p className="text-slate-400 leading-relaxed line-clamp-3">
            {lesson.description}
          </p>
        </div>

        {/* Tone */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 bg-white/5 font-medium backdrop-blur-sm">
            {lesson.toneEmoji} {lesson.tone}
          </span>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-11 w-11 rounded-full overflow-hidden border-2 border-violet-500/30 ring-2 ring-violet-500/20"
              >
                {lesson.authorImage ? (
                  <img
                    src={lesson.authorImage}
                    alt={lesson.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-slate-400">
                    <User size={20} />
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Posted By
                </p>
                <p className="text-sm font-bold text-white">{lesson.name}</p>
                <span className="text-slate-500 text-xs flex items-center gap-1">
                  <Clock size={12} /> {new Date(lesson.postedAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <Link
              to={`/lesson-details/${lesson._id}`}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 active:scale-95"
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
