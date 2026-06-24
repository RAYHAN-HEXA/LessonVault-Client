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
    gradient: "from-[#2F8F3A] to-[#1F4D2B]",
    bgColor: "bg-[#2F8F3A]/10",
    textColor: "text-[#2F8F3A]",
    count: 245,
    description: "Lessons about career growth and workplace wisdom",
  },
  {
    id: "relationships",
    name: "Relationships",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-[#D9A441] to-[#1F4D2B]",
    bgColor: "bg-[#D9A441]/10",
    textColor: "text-[#D9A441]",
    count: 189,
    description: "Insights on building meaningful connections",
  },
  {
    id: "education",
    name: "Education & Learning",
    icon: <GraduationCap className="w-6 h-6" />,
    gradient: "from-[#2F8F3A] to-[#6E9277]",
    bgColor: "bg-[#2F8F3A]/10",
    textColor: "text-[#2F8F3A]",
    count: 156,
    description: "Wisdom from academic journeys",
  },
  {
    id: "personal-growth",
    name: "Personal Growth",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-[#D9A441] to-[#2F8F3A]",
    bgColor: "bg-[#D9A441]/10",
    textColor: "text-[#D9A441]",
    count: 312,
    description: "Self-improvement and development",
  },
  {
    id: "life-lessons",
    name: "Life Lessons",
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-[#1F4D2B] to-[#2F8F3A]",
    bgColor: "bg-[#1F4D2B]/10",
    textColor: "text-[#1F4D2B]",
    count: 428,
    description: "Hard-earned wisdom from life experience",
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-[#2F8F3A] to-[#1F4D2B]",
    bgColor: "bg-[#2F8F3A]/10",
    textColor: "text-[#2F8F3A]",
    count: 98,
    description: "Lessons from leading teams and organizations",
  },
  {
    id: "finance",
    name: "Finance & Money",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-[#D9A441] to-[#1F4D2B]",
    bgColor: "bg-[#D9A441]/10",
    textColor: "text-[#D9A441]",
    count: 134,
    description: "Financial wisdom and money management",
  },
  {
    id: "health",
    name: "Health & Wellness",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-[#2F8F3A] to-[#6E9277]",
    bgColor: "bg-[#2F8F3A]/10",
    textColor: "text-[#2F8F3A]",
    count: 167,
    description: "Physical and mental wellbeing insights",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-[#F8FAF6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            Explore by{" "}
            <span className="bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Browse lessons across different life domains and find wisdom that
            resonates with your journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/public-lessons?category=${category.name}`}
              className="group relative bg-white rounded-2xl p-6 border border-[#E5ECE2] hover:shadow-xl hover:shadow-[#2F8F3A]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={category.textColor}>{category.icon}</div>
                </div>

                {/* Category Name */}
                <h3 className="font-bold text-[#1F2937] text-lg mb-2 group-hover:text-[#2F8F3A] transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#6B7280] text-sm">
                    <Star size={14} className="text-[#D9A441]" />
                    <span>{category.count} lessons</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#2F8F3A] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
