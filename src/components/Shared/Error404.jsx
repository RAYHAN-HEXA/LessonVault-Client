import React from "react";
import { Link, useNavigate } from "react-router";
import { FileQuestion, ArrowLeft, Home, Compass } from "lucide-react";

const Error404 = () => {
  const navigate = useNavigate();

  const THEME = {
    dark: "#1F4D2B",
    primary: "#2F8F3A",
    light: "#F8FAF6",
    accent: "#D9A441",
    white: "#FFFFFF",
  };

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center font-sans p-6 overflow-hidden"
      style={{ backgroundColor: THEME.light }}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")`,
        }}
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#1F4D2B]/5 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 text-center animate-fade-in-up border border-[#E5ECE2]">
        <div className="relative mb-10 mx-auto w-32 h-32 flex items-center justify-center group">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D9A441] animate-spin-slow"></div>

          <div className="relative z-10 bg-[#EEF6EF] p-6 rounded-full text-[#2F8F3A] shadow-inner group-hover:scale-110 transition-transform duration-500">
            <FileQuestion size={48} strokeWidth={2} />
          </div>

          <div className="absolute -bottom-2 right-0 bg-[#1F4D2B] text-[#D9A441] p-2 rounded-full shadow-lg">
            <Compass size={20} />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-8xl font-serif font-bold text-[#1F4D2B] opacity-10 absolute left-1/2 -translate-x-1/2 -top-16 select-none w-full">
            404
          </h1>
          <h2 className="text-4xl font-serif font-bold text-[#1F2937] mb-3 relative z-10">
            The Lost Chapter
          </h2>
          <div className="w-12 h-1 bg-[#2F8F3A] mx-auto rounded-full mb-4"></div>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            We've searched the entire archive, but the page you are looking for
            seems to have been misplaced in time.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] text-white font-bold hover:from-[#1F4D2B] hover:to-[#2F8F3A] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Return to Library
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="w-full px-6 py-4 rounded-xl border border-[#E5ECE2] text-[#6B7280] font-bold hover:bg-[#EEF6EF] hover:text-[#1F4D2B] hover:border-[#2F8F3A]/20 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Error404;
