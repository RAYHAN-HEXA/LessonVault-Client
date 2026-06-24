import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, X, SlidersHorizontal } from "lucide-react";
import Loader from "../components/Shared/Loader";
import LessonCard from "../components/Shared/LessonCard";
import SkeletonCard from "../components/Shared/SkeletonCard";
import useAxios from "../hooks/useAxios";
import usePremium from "../hooks/usePremium";

const PublicLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const isPremium = usePremium();
  const limit = 6;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
    setSearchText("");
    setSort("");
    setCategory("");
    setFilter("");
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axiosInstance.get(
          `/lessons?isPrivate=false&limit=${limit}&skip=${
            currentPage * limit
          }&sort=${sort}&filter=${filter}&tone=${filter}&category=${encodeURIComponent(
            category
          )}&search=${search}&status=approved`
        );
        setLessons(res.data.result);
        const page = Math.ceil(res.data.total / limit);
        setTotalPages(page);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [currentPage, limit, sort, filter, category, search, axiosInstance]);

  return (
    <div className="min-h-screen w-full relative py-12 bg-[#F8FAF6]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2F8F3A]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6E9277]/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-16">
        {/* HERO SECTION */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F8F3A]/20 to-[#6E9277]/20 border border-[#2F8F3A]/30 mb-4">
            <BookOpen size={28} className="text-[#2F8F3A]" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#1F2937]">
            The Collective{" "}
            <span className="bg-gradient-to-r from-[#2F8F3A] via-[#6E9277] to-[#1F4D2B] bg-clip-text text-transparent">
              Wisdom
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#6B7280] font-light">
            A curated library of life lessons, hard-earned truths, and moments
            of clarity shared by the community.
          </p>
        </motion.div>

        {/* SEARCH & FILTER BAR */}
        <motion.div
          className="max-w-[1440px] mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="flex flex-col xl:flex-row items-center gap-3 bg-[#EEF6EF]/50 backdrop-blur-xl border border-[#2F8F3A]/10 rounded-2xl p-2">
            {/* SEARCH INPUT */}
            <form
              onSubmit={(e) => handleSearch(e)}
              className="bg-[#EEF6EF]/50 rounded-xl flex-1 flex items-center px-4 py-2 w-full"
            >
              <Search size={20} className="text-[#6B7280] mr-3" />
              <input
                type="text"
                name="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for wisdom..."
                className="flex-1 bg-transparent border-none outline-none text-[#1F2937] placeholder:text-[#6B7280] font-medium"
              />
            </form>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <select
                value={category}
                onChange={(e) => handleCategory(e)}
                className="bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 rounded-xl px-4 py-2.5 text-[#1F2937] cursor-pointer hover:border-[#2F8F3A]/30 transition-all focus:outline-none"
              >
                <option value="">All Categories</option>
                <option value="Personal Growth">Personal Growth</option>
                <option value="Career">Career</option>
                <option value="Relationships">Relationships</option>
                <option value="Mistakes Learned">Mistakes Learned</option>
                <option value="Philosophy">Philosophy</option>
              </select>

              <select
                value={filter}
                onChange={(e) => handleFilter(e)}
                className="bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 rounded-xl px-4 py-2.5 text-[#1F2937] cursor-pointer hover:border-[#2F8F3A]/30 transition-all focus:outline-none"
              >
                <option value="">All Tones</option>
                <option value="Motivational">Motivational</option>
                <option value="Sad">Sad</option>
                <option value="Realization">Realization</option>
                <option value="Gratitude">Gratitude</option>
              </select>

              <select
                value={sort}
                onChange={(e) => handleSort(e)}
                className="bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 rounded-xl px-4 py-2.5 text-[#1F2937] cursor-pointer hover:border-[#2F8F3A]/30 transition-all focus:outline-none"
              >
                <option value="postedAt">Newest</option>
                <option value="favorites">Most Saved</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Clear filters button */}
          <div className="flex justify-center mt-4">
            {(filter || sort || search || searchText || category) && (
              <button
                onClick={handleClear}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-[#1F2937] bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all"
              >
                <X size={18} />
                Clear Filters
              </button>
            )}
          </div>
        </motion.div>

        {/* LESSON GRID */}
        {loading ? (
          <SkeletonCard cardCount={6} />
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#2F8F3A]/20 to-[#6E9277]/20 mb-6">
              <BookOpen size={36} className="text-[#2F8F3A]" />
            </div>
            <h3 className="text-2xl font-serif text-[#1F2937] mb-2">
              The pages are blank.
            </h3>
            <p className="text-[#6B7280]">Be the first to share your wisdom.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 flex-wrap justify-center pb-20">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-6 py-2.5 rounded-xl font-medium text-[#1F2937] bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 hover:border-[#2F8F3A]/50 hover:bg-[#2F8F3A]/10 transition-all"
          >
            Previous
          </button>
        )}
        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-4 py-2.5 rounded-xl font-medium transition-all ${
              i === currentPage
                ? "bg-gradient-to-r from-[#2F8F3A] to-[#6E9277] text-white shadow-lg shadow-[#2F8F3A]/25"
                : "bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 text-[#6B7280] hover:border-[#2F8F3A]/50 hover:bg-[#2F8F3A]/10"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-6 py-2.5 rounded-xl font-medium text-[#1F2937] bg-[#EEF6EF]/50 border border-[#2F8F3A]/10 hover:border-[#2F8F3A]/50 hover:bg-[#2F8F3A]/10 transition-all"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PublicLessons;
