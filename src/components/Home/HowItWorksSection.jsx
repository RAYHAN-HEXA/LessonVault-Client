import { BookOpen, PenTool, Users, Share2, Heart, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    number: "01",
    title: "Write Your Lesson",
    description: "Capture a meaningful life experience, insight, or piece of wisdom you've gained.",
    color: "from-[#2F8F3A] to-[#23722D]",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Categorize & Share",
    description: "Tag your lesson under Personal Growth, Career, Education, or Wellness and publish it.",
    color: "from-[#6E9277] to-[#2F8F3A]",
  },
  {
    icon: Users,
    number: "03",
    title: "Community Reads",
    description: "Other learners discover, read, and relate to your real-life experiences.",
    color: "from-[#1F4D2B] to-[#6E9277]",
  },
  {
    icon: Heart,
    number: "04",
    title: "Save & Favorite",
    description: "Bookmark lessons that resonate with you and build your personal wisdom library.",
    color: "from-[#2F8F3A] to-[#C9D8C5]",
  },
  {
    icon: Share2,
    number: "05",
    title: "Comment & Connect",
    description: "Engage with authors, ask questions, and build meaningful connections.",
    color: "from-[#6E9277] to-[#1F4D2B]",
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Grow Together",
    description: "Track your impact, earn a premium badge, and inspire the next generation.",
    color: "from-[#C9D8C5] to-[#2F8F3A]",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F8F3A]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F8F3A]/10 border border-[#2F8F3A]/20 mb-6">
            <span className="text-[#2F8F3A] text-sm font-semibold">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-[#2F8F3A] via-[#6E9277] to-[#C9D8C5] bg-clip-text text-transparent">
              Lessonly
            </span>{" "}
            Works
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            From a single moment of clarity to a global community of wisdom — here's how you get started.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-[#E5ECE2] hover:border-[#2F8F3A]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F8F3A]/5 to-[#6E9277]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-[#2F8F3A]/10 group-hover:text-[#2F8F3A]/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#1F2937] mb-3">
                  {step.title}
                </h3>
                <p className="relative text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#E5ECE2]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Flow Arrow Diagram */}
        <div className="mt-16 hidden lg:flex items-center justify-center gap-4">
          {["Sign Up", "Write", "Share", "Connect", "Grow"].map((label, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] text-white text-sm font-semibold shadow-lg shadow-[#2F8F3A]/20">
                {label}
              </div>
              {i < 4 && (
                <svg className="w-6 h-6 text-[#2F8F3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
