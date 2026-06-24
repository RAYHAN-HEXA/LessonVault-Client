import React from "react";
import { Link } from "react-router";
import { BookOpen } from "lucide-react";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 cursor-pointer group ${className}`}>
      <div className="flex items-center gap-2">
        <BookOpen className="w-7 h-7 text-[#2F8F3A]" strokeWidth={2} />
        <span className="text-xl font-semibold text-[#1F2937] tracking-tight">
          Lessonly
        </span>
      </div>
    </Link>
  );
};

export default Logo;
