import React from "react";
import { Target, Eye, Shield, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

const BenefitCard = ({ title, description, Icon, gradient, bgColor, textColor }) => {
  return (
    <div className="group relative bg-white backdrop-blur-xl p-8 rounded-3xl border border-[#E5ECE2] hover:border-[#2F8F3A]/30 transition-all duration-500 ease-out flex flex-col space-y-4 h-full overflow-hidden">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

      {/* Icon Block */}
      <div
        className={`relative w-14 h-14 flex items-center justify-center rounded-2xl ${bgColor} ${textColor} transition-all duration-500 group-hover:scale-110`}
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-semibold mt-2 text-[#1F2937] group-hover:text-[#2F8F3A] transition-colors">
        {title}
      </h3>

      <p className="relative text-[#6B7280] text-base flex-grow">{description}</p>

      {/* Read More Link */}
      <Link
        to="/public-lessons"
        className="relative flex items-center text-sm font-medium pt-2 text-[#2F8F3A] hover:text-[#23722D] transition-all group-hover:translate-x-1"
      >
        Explore Insight
        <ArrowRight size={16} className="ml-2" />
      </Link>

      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 blur-2xl rounded-full`}></div>
    </div>
  );
};

const LearningFromLifeSection = () => {
  const benefits = [
    {
      title: "Deepened Self-Awareness",
      description:
        "By reflecting on your history, you uncover core motivations, fears, and strengths, leading to a clearer sense of purpose.",
      Icon: Eye,
      gradient: "from-[#2F8F3A] to-[#23722D]",
      bgColor: "bg-[#2F8F3A]/20",
      textColor: "text-[#2F8F3A]",
    },
    {
      title: "Enhanced Decision Quality",
      description:
        "Past experiences provide a robust framework, allowing you to recognize patterns and make forward-looking choices with greater certainty.",
      Icon: Target,
      gradient: "from-[#6E9277] to-[#C9D8C5]",
      bgColor: "bg-[#6E9277]/20",
      textColor: "text-[#6E9277]",
    },
    {
      title: "Resilience and Fortitude",
      description:
        "Recalling how you navigated previous challenges builds mental toughness, transforming setbacks into evidence of your capability.",
      Icon: Shield,
      gradient: "from-[#1F4D2B] to-[#2F8F3A]",
      bgColor: "bg-[#1F4D2B]/20",
      textColor: "text-[#1F4D2B]",
    },
    {
      title: "Meaningful Connection",
      description:
        "Understanding your own journey enables authentic empathy, fostering deeper, more supportive relationships with others.",
      Icon: Users,
      gradient: "from-[#C9D8C5] to-[#EEF6EF]",
      bgColor: "bg-[#C9D8C5]/20",
      textColor: "text-[#2F8F3A]",
    },
  ];

  return (
    <section className="w-full py-24 px-4 lg:px-0 relative overflow-hidden bg-[#F8FAF6]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2F8F3A]/10 to-[#6E9277]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* --- HEADER: Context and Thesis --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2F8F3A]/20 to-[#6E9277]/20 border border-[#2F8F3A]/30">
            <Sparkles size={16} className="text-[#2F8F3A]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2F8F3A]">
              Core Philosophy
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1F2937]">
            Why Learning From Life{" "}
            <span className="bg-gradient-to-r from-[#2F8F3A] via-[#6E9277] to-[#C9D8C5] bg-clip-text text-transparent">
              Matters
            </span>
          </h2>

          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            Your life is the richest textbook. We provide the tools to
            systematically extract wisdom, not just memories.
          </p>
        </div>

        {/* --- CARDS: Four Benefits Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.Icon}
              gradient={benefit.gradient}
              bgColor={benefit.bgColor}
              textColor={benefit.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningFromLifeSection;
