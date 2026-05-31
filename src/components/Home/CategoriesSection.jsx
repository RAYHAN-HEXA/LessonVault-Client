import { Link } from "react-router";
import {
  Briefcase,
  Heart,
  GraduationCap,
  Sparkles,
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  Star,
  Globe,
  Leaf,
  Coffee,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    id: "career",
    name: "Career & Professional",
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    count: 245,
    description: "Lessons about career growth and workplace wisdom",
  },
  {
    id: "relationships",
    name: "Relationships",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-400",
    count: 189,
    description: "Insights on building meaningful connections",
  },
  {
    id: "education",
    name: "Education & Learning",
    icon: <GraduationCap className="w-6 h-6" />,
    gradient: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    count: 156,
    description: "Wisdom from academic journeys",
  },
  {
    id: "personal-growth",
    name: "Personal Growth",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    count: 312,
    description: "Self-improvement and development",
  },
  {
    id: "life-lessons",
    name: "Life Lessons",
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    count: 428,
    description: "Hard-earned wisdom from life experience",
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
    count: 98,
    description: "Lessons from leading teams and organizations",
  },
  {
    id: "finance",
    name: "Finance & Money",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    count: 134,
    description: "Financial wisdom and money management",
  },
  {
    id: "health",
    name: "Health & Wellness",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-400",
    count: 167,
    description: "Physical and mental wellbeing insights",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore by{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Find lessons that resonate with your journey. Browse through our
            diverse categories to discover wisdom that matters to you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/public-lessons?category=${encodeURIComponent(category.name)}`}
              className="group relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon container */}
              <div
                className={`relative w-14 h-14 rounded-2xl ${category.bgColor} ${category.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="relative font-semibold text-white text-base mb-1 group-hover:text-violet-300 transition-colors">
                {category.name}
              </h3>
              <p className="relative text-xs text-slate-500 mb-3">
                {category.count} lessons
              </p>

              {/* Arrow indicator */}
              <div className="relative flex items-center gap-1 text-sm text-slate-500 group-hover:text-violet-400 transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-20 blur-2xl rounded-full`}></div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/public-lessons"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
          >
            View All Categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
