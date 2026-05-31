import React from "react";
import { Target, Eye, Shield, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

const BenefitCard = ({ title, description, Icon, gradient, bgColor, textColor }) => {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 ease-out flex flex-col space-y-4 h-full overflow-hidden">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

      {/* Icon Block */}
      <div
        className={`relative w-14 h-14 flex items-center justify-center rounded-2xl ${bgColor} ${textColor} transition-all duration-500 group-hover:scale-110`}
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-semibold mt-2 text-white group-hover:text-violet-300 transition-colors">
        {title}
      </h3>

      <p className="relative text-slate-400 text-base flex-grow">{description}</p>

      {/* Read More Link */}
      <Link
        to="/public-lessons"
        className="relative flex items-center text-sm font-medium pt-2 text-violet-400 hover:text-violet-300 transition-all group-hover:translate-x-1"
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
      gradient: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/20",
      textColor: "text-violet-400",
    },
    {
      title: "Enhanced Decision Quality",
      description:
        "Past experiences provide a robust framework, allowing you to recognize patterns and make forward-looking choices with greater certainty.",
      Icon: Target,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/20",
      textColor: "text-cyan-400",
    },
    {
      title: "Resilience and Fortitude",
      description:
        "Recalling how you navigated previous challenges builds mental toughness, transforming setbacks into evidence of your capability.",
      Icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/20",
      textColor: "text-emerald-400",
    },
    {
      title: "Meaningful Connection",
      description:
        "Understanding your own journey enables authentic empathy, fostering deeper, more supportive relationships with others.",
      Icon: Users,
      gradient: "from-fuchsia-500 to-pink-500",
      bgColor: "bg-fuchsia-500/20",
      textColor: "text-fuchsia-400",
    },
  ];

  return (
    <section className="w-full py-24 px-4 lg:px-0 relative overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* --- HEADER: Context and Thesis --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30">
            <Sparkles size={16} className="text-violet-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-violet-300">
              Core Philosophy
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Why Learning From Life{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Matters
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto">
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
