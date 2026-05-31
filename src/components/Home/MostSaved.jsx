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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30">
          <Heart size={16} className="text-fuchsia-400" />
          <span className="text-sm font-semibold uppercase tracking-wider text-fuchsia-300">
            Community Favorites
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Most Saved{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            Life Lessons
          </span>
        </h2>

        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Crown Jewels of Wisdom — treasured by our community
        </p>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* LESSON GRID */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader />
            <p className="mt-4 text-slate-400 font-serif italic">
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 mb-6">
              <Flame size={36} className="text-fuchsia-400" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">
              The pages are blank.
            </h3>
            <p className="text-slate-400">Be the first to share your wisdom.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MostSaved;
