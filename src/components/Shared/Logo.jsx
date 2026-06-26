import React from "react";
import { Link } from "react-router";
import { BookOpen } from "lucide-react";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-2.5 cursor-pointer group ${className}`}>
      <div className="relative flex items-center gap-2.5">
        {/* Icon with glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#2F8F3A]/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F8F3A] to-[#1F4D2B] flex items-center justify-center shadow-lg shadow-[#2F8F3A]/25 group-hover:shadow-[#2F8F3A]/40 transition-all duration-300 group-hover:scale-105">
            <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#1F4D2B] via-[#2F8F3A] to-[#6E9277] bg-clip-text text-transparent">
            Lessonly
          </span>
          <span className="text-[10px] font-medium text-[#6E9277]/70 tracking-[0.2em] uppercase -mt-1">
            Life Lessons
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
