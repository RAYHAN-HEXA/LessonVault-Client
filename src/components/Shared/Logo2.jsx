import React from "react";
import { BookOpen } from "lucide-react";

const Logo2 = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 cursor-pointer group ${className}`}>
      <div className="flex items-center gap-2">
        <BookOpen className="w-10 h-10 text-white" strokeWidth={2} />
        <span className="text-2xl font-bold text-white tracking-tight">
          Lessonly
        </span>
      </div>
    </div>
  );
};

export default Logo2;
