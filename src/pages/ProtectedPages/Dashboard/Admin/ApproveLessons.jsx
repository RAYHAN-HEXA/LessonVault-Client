import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Clock,
  User,
  Calendar,
  FileText,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { TbCancel } from "react-icons/tb";
import useAxios from "../../../../hooks/useAxios";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ApproveLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axiosInstance.get("/lessons");

        const sorted = (res.data.result || []).sort((a, b) => {
          if (a.status !== "approved" && b.status === "approved") return -1;
          if (a.status === "approved" && b.status !== "approved") return 1;
          return new Date(b.postedAt) - new Date(a.postedAt);
        });
        setLessons(sorted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lessons:", error);
        setLoading(false);
      }
    };

    fetchLessons();
  }, [axiosInstance]);

  const handleApprove = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2F8F3A",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, approve!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/lessons/${id}/status`, {
            status: "approved",
          });
          setLessons((prev) =>
            prev.map((lesson) =>
              lesson._id === id ? { ...lesson, status: "approved" } : lesson
            )
          );
          Swal.fire({
            title: "Approved!",
            text: "You approved the lesson.",
            icon: "success",
            confirmButtonColor: "#2F8F3A",
          });
        }
      });
    } catch (error) {
      console.error("Failed to approve lesson", error);
    }
  };
  const handleRemove = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2F8F3A",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLessons((prev) => prev.filter((lesson) => lesson._id !== id));
          await axiosSecure.delete(`/lessons/${id}`);
          Swal.fire({
            title: "Removed!",
            text: "You removed the lesson.",
            icon: "success",
            confirmButtonColor: "#2F8F3A",
          });
        }
      });
    } catch (error) {
      console.error("Failed to approve lesson", error);
    }
  };

  const handleFeatured = async (id, featuredTask) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2F8F3A",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, ${
          featuredTask === "add to featured" ? "Feature" : "Remove"
        }!`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLessons((prev) =>
            prev.map((lesson) =>
              lesson._id === id
                ? {
                    ...lesson,
                    isFeatured:
                      featuredTask === "add to featured" ? "true" : "false",
                  }
                : lesson
            )
          );
          await axiosSecure.patch(`/lessons/${id}/featured`, {
            isFeatured: featuredTask === "add to featured" ? "true" : "false",
          });
          Swal.fire({
            title: "Success!",
            text: "You Changed The Status",
            icon: "success",
            confirmButtonColor: "#2F8F3A",
          });
        }
      });
    } catch (error) {
      console.error("Failed to feature lesson", error);
    }
  };
  return (
    <div className="w-full font-sans min-h-[80vh] p-8">
      {/*  HEADER */}
      <div className="mb-10 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#C9D8C5]/20 rounded-xl text-[#6E9277]">
            <ShieldCheck size={24} fill="currentColor" className="opacity-80" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1F4D2B]">
            Wisdom Moderation
          </h1>
        </div>
        <p className="text-[#6B7280] max-w-2xl">
          Review and approve contributions to the archive. Currently managing{" "}
          <span className="font-bold text-[#6E9277]">{lessons.length}</span>{" "}
          submissions.
        </p>
      </div>

      {/*  TABLE CONTAINER */}
      <div
        className="bg-white rounded-[2.5rem] shadow-xl border border-white overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        {loading ? (
          <div className="p-8 space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="h-20 w-full bg-[#F8FAF6] rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : lessons.length > 0 ? (
          //data table
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#E5ECE2] bg-[#F8FAF6]">
                  <th className="p-6 pl-10 text-xs font-bold text-[#8A8F98] uppercase tracking-widest w-4/12">
                    Lesson Context
                  </th>
                  <th className="p-6 text-xs font-bold text-[#8A8F98] uppercase tracking-widest w-3/12">
                    Author
                  </th>
                  <th className="p-6 text-xs font-bold text-[#8A8F98] uppercase tracking-widest w-2/12">
                    Date Posted
                  </th>
                  <th className="p-6 pr-10 text-xs font-bold text-[#8A8F98] uppercase tracking-widest w-3/12 text-right">
                    Approval Status
                  </th>
                  <th className="p-6 pr-10 text-xs font-bold text-[#8A8F98] uppercase tracking-widest w-3/12 text-right">
                    Feature Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF6EF]">
                {lessons.map((lesson) => (
                  <tr
                    key={lesson._id}
                    className="group hover:bg-[#EEF6EF]/50 transition-colors"
                  >
                    {/* COL 1: CONTEXT */}
                    <td className="p-6 pl-10">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 rounded-lg bg-[#EEF6EF] text-[#1F4D2B]">
                          <FileText size={20} />
                        </div>
                        <div>
                          <Link
                            to={`/lesson-details/${lesson._id}`}
                            className="font-serif font-bold text-[#1F4D2B] text-md leading-tight mb-1 group-hover:text-[#6E9277] transition-colors text-clip"
                          >
                            {lesson.title}
                          </Link>
                          <p className="text-xs text-[#6B7280] font-medium bg-[#EEF6EF] inline-block px-2 py-0.5 rounded-md">
                            {lesson.category}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* COL 2: AUTHOR */}
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            lesson.authorImage ||
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                          }
                          alt={lesson.name}
                          className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                        />
                        <div>
                          <p className="font-bold text-[#1F4D2B] text-sm">
                            {lesson.name}
                          </p>
                          <p className="text-xs text-[#8A8F98] font-mono truncate max-w-[150px]">
                            {lesson.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* COL 3: DATE */}
                    <td className="p-6">
                      <div className="inline-flex items-center gap-2 text-[#6B7280] text-sm font-medium">
                        <Calendar size={14} className="text-[#C9D8C5]" />
                        {new Date(lesson.postedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </td>

                    {/* COL 4: STATUS ACTION */}
                    <td className="p-6 pr-10 text-right">
                      <div className="flex justify-end">
                        {lesson.status === "approved" ? (
                          <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-[#6E9277]/10 text-[#6E9277] border border-[#6E9277]/20 animate-fade-in">
                            <FaCheckCircle
                              size={16}
                              fill="currentColor"
                              className="text-green-600"
                            />
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Approved
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() => handleApprove(lesson._id)}
                              className="group/btn cursor-pointer btn btn-success btn-outline btn-sm"
                            >
                              <CheckCircle
                                size={16}
                                className="text-green-500 group-hover/btn:scale-110 transition-transform"
                              />
                            </button>
                            <button
                              onClick={() => handleRemove(lesson._id)}
                              className="group/btn  btn btn-error btn-outline btn-sm cursor-pointer"
                            >
                              <FaTrash
                                size={16}
                                className="text-red-500 group-hover/btn:scale-110 transition-transform"
                              />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* COL 5: FEATURED ACTION */}
                    <td className="p-6 pr-10 text-right">
                      <div className="flex justify-end">
                        {lesson.isFeatured === "true" ? (
                          <button
                            onClick={() =>
                              handleFeatured(lesson._id, "remove from featured")
                            }
                            className="group/btn flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-700 text-white hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
                          >
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Remove
                            </span>
                            <TbCancel
                              color="white"
                              size={16}
                              className="text-[#C9D8C5] group-hover/btn:scale-110 transition-transform"
                            />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleFeatured(lesson._id, "add to featured")
                            }
                            className="group/btn flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1F4D2B] text-white hover:bg-[#6E9277] hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
                          >
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Feature
                            </span>
                            <CheckCircle
                              size={16}
                              className="text-[#C9D8C5] group-hover/btn:scale-110 transition-transform"
                            />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // EMPTY STATE
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-[#EEF6EF] flex items-center justify-center mb-6 text-[#1F4D2B]/30">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1F4D2B] mb-2">
              All Caught Up
            </h3>
            <p className="text-[#6B7280] max-w-sm">
              The moderation queue is empty. Great job keeping the wisdom pure.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ApproveLessons;
