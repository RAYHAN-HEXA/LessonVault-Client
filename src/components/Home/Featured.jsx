import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import LessonCard from "../Shared/LessonCard";
import useTheme from "../../hooks/useTheme";
import usePremium from "../../hooks/usePremium";
import Loader from "../Shared/Loader";
import { Sparkles, Flame } from "lucide-react";

const Featured = () => {
  const { COLORS } = useTheme();
  const isPremium = usePremium();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("/lessons?isFeatured=true").then((res) => {
      setLessons(res.data.result);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [axiosInstance]);

  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F8F3A]/10 border border-[#2F8F3A]/30">
          <Sparkles size={16} className="text-[#2F8F3A]" />
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2F8F3A]">
            Best Lessons
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1F2937]">
          Featured Life Lessons
        </h2>

        <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
          A curated treasury of exceptional wisdom from our community
        </p>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* LESSON GRID */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader />
            <p className="mt-4 text-[#6B7280] font-serif italic">
              Retrieving archives...
            </p>
          </div>
        ) : lessons.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {lessons.map((lesson) => (
              <motion.div
                key={lesson._id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <LessonCard lesson={lesson} isPremium={isPremium} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <Flame size={48} className="text-[#2F8F3A] mx-auto mb-4" />
            <p className="text-[#6B7280] font-serif italic">
              No featured lessons yet. Be the first to share your wisdom!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
