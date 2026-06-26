import React from "react";
import { BookOpen } from "lucide-react";

const Logo2 = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 cursor-pointer group ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
        <div className="relative w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
          <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-white">
          Lessonly
        </span>
        <span className="text-[10px] font-medium text-white/50 tracking-[0.2em] uppercase -mt-1">
          Life Lessons
        </span>
      </div>
    </div>
  );
};

export default Logo2;
