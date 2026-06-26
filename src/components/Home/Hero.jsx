import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Star,
  Share2,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    tagline: "Capture Your Journey",
    headline: "Preserve Your Life's Greatest Lessons",
    description:
      "Don't let wisdom fade. Lessonly is your secure vault for storing personal growth insights, meaningful moments, and the philosophy that guides you.",
    cta: "Start Your Journal",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1170&auto=format&fit=crop",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "from-[#2F8F3A] via-[#1F4D2B] to-[#6E9277]",
  },
  {
    id: 2,
    tagline: "Curated Wisdom",
    headline: "Discover Perspectives That Resonate",
    description:
      "Browse a public library of life lessons shared by others. Mark your favorites, organize by theme, and accelerate your personal growth through shared experience.",
    cta: "Explore Library",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2500&auto=format&fit=crop",
    icon: <Star className="w-6 h-6" />,
    gradient: "from-[#1F4D2B] via-[#6E9277] to-[#2F8F3A]",
  },
  {
    id: 3,
    tagline: "Leave a Legacy",
    headline: "Share Your Insight with the World",
    description:
      "Turn your experiences into guidance for others. Publish your most profound realizations and track how many lives your wisdom touches.",
    cta: "Share a Lesson",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2500&auto=format&fit=crop",
    icon: <Share2 className="w-6 h-6" />,
    gradient: "from-[#2F8F3A] via-[#6E9277] to-[#1F4D2B]",
  },
];

// Generate floating particle positions once at module load time
const generateParticles = (count) =>
  [...Array(count)].map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: 5 + Math.random() * 10,
  }));

const floatingParticles = generateParticles(20);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div className="relative w-full overflow-hidden bg-[#FFFFFF]">
      {/* Animated Gradient Background - Green Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs - green colors */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6E9277]/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2F8F3A]/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F8FAF6]/30 rounded-full blur-[80px] animate-pulse-slow animation-delay-4000"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,143,58,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(47,143,58,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,246,0.5)_100%)]"></div>
      </div>

      {/* Floating particles - subtle green */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#2F8F3A]/15 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24 relative z-10 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* --- LEFT: Text Content --- */}
          <div className="space-y-8 order-2 lg:order-1">
            {slides.map(
              (slide, index) =>
                index === currentSlide && (
                  <div key={slide.id} className="animate-fade-in-up space-y-6">
                    {/* Badge with gradient */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${slide.gradient} bg-opacity-20 border border-[#2F8F3A]/20 shadow-lg backdrop-blur-sm`}>
                      <span className="text-white/90">{slide.icon}</span>
                      <span className="text-white/90 text-sm font-semibold tracking-wide">{slide.tagline}</span>
                    </div>

                    {/* Gradient Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                      <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                        {slide.headline}
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-[#6B7280] leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link
                        to={
                          slide.cta === "Explore Library"
                            ? "/public-lessons"
                            : "/dashboard/add-lessons"
                        }
                        className={`group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                        style={{
                          background: `linear-gradient(to right, #2F8F3A, #1F4D2B)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                        <span className="relative flex items-center gap-2">
                          {slide.cta}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                      <button
                        onClick={() => {
                          document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-4 rounded-full border border-[#E5ECE2] text-[#1F2937] font-medium hover:bg-[#F8FAF6] transition-all hover:border-[#2F8F3A]"
                      >
                        How it works
                      </button>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5ECE2]">
                      {[
                        { icon: <Users className="w-5 h-5" />, label: "Active Learners", value: "10K+" },
                        { icon: <BookOpen className="w-5 h-5" />, label: "Lessons Shared", value: "5K+" },
                        { icon: <TrendingUp className="w-5 h-5" />, label: "Growth Rate", value: "98%" },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="flex items-center justify-center gap-1 text-[#2F8F3A] mb-1">
                            {stat.icon}
                          </div>
                          <div className="text-2xl font-bold text-[#1F2937]">{stat.value}</div>
                          <div className="text-xs text-[#6B7280]">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}

            {/* Custom Carousel Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      currentSlide === idx
                        ? "w-12 bg-[#2F8F3A]"
                        : "w-6 bg-[#E5ECE2] hover:bg-[#6E9277]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: Carousel/Image --- */}
          <div
            className="relative h-[350px] md:h-[450px] lg:h-[600px] w-full order-1 lg:order-2"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Image Container with Glassmorphism */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-[#E5ECE2] shadow-2xl bg-white/50 backdrop-blur-xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.headline}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4D2B]/80 via-transparent to-transparent opacity-80"></div>
                </div>
              ))}

              {/* Floating Glass Cards */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl border border-[#E5ECE2] p-4 rounded-2xl shadow-xl max-w-[180px] animate-float-card-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2F8F3A] to-[#6E9277] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[#1F2937] font-bold text-lg">4.9</div>
                    <div className="text-[#6B7280] text-xs">Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xl border border-[#E5ECE2] p-4 rounded-2xl shadow-xl max-w-[200px] animate-float-card-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="avatar-group -space-x-2">
                    <div className="avatar">
                      <div className="w-8 rounded-full border-2 border-white">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8 rounded-full border-2 border-white">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8 rounded-full border-2 border-white">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-gradient-to-br from-[#2F8F3A] to-[#6E9277] border-2 border-white text-white text-xs">
                        +99
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-[#1F2937]/80">
                  Join <span className="text-[#2F8F3A] font-bold">10K+</span> learners sharing wisdom
                </div>
              </div>
            </div>

            {/* Navigation Buttons (Floating) */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-[#E5ECE2] text-[#1F2937] hover:bg-[#F8FAF6] hover:scale-110 transition-all flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-[#E5ECE2] text-[#1F2937] hover:bg-[#F8FAF6] hover:scale-110 transition-all flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Decorative gradient ring */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-r from-[#2F8F3A]/20 via-[#6E9277]/20 to-[#C9D8C5]/20 blur-xl"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        @keyframes float-card-1 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-card-2 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-card-1 {
          animation: float-card-1 4s ease-in-out infinite;
        }
        .animate-float-card-2 {
          animation: float-card-2 5s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
