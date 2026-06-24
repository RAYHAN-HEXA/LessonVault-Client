import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import LessonCard from "../Shared/LessonCard";
import Loader from "../Shared/Loader";
import usePremium from "../../hooks/usePremium";
import { Heart, Flame } from "lucide-react";

const MostSaved = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const isPremium = usePremium();

  useEffect(() => {
    axiosInstance.get("/lessons?sort=favorites").then((res) => {
      setLessons(res.data.result);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [axiosInstance]);

  return (
    <div className="py-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A441]/20 to-[#C49431]/20 border border-[#D9A441]/30">
          <Heart size={16} className="text-[#D9A441]" />
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1F4D2B]">
            Community Favorites
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1F2937]">
          Most Saved{" "}
          <span className="bg-gradient-to-r from-[#D9A441] via-[#C49431] to-[#2F8F3A] bg-clip-text text-transparent">
            Life Lessons
          </span>
        </h2>

        <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
          Crown Jewels of Wisdom — treasured by our community
        </p>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
            {lessons.slice(0, 6).map((lesson) => (
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
              No lessons saved yet. Start building your wisdom collection!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MostSaved;
