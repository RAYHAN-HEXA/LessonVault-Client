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
} from "lucide-react";

const categories = [
  {
    id: "career",
    name: "Career & Professional",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600",
    count: 245,
    description: "Lessons about career growth and workplace wisdom",
  },
  {
    id: "relationships",
    name: "Relationships",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-pink-100 text-pink-600",
    count: 189,
    description: "Insights on building meaningful connections",
  },
  {
    id: "education",
    name: "Education & Learning",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600",
    count: 156,
    description: "Wisdom from academic journeys",
  },
  {
    id: "personal-growth",
    name: "Personal Growth",
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-yellow-100 text-yellow-600",
    count: 312,
    description: "Self-improvement and development",
  },
  {
    id: "life-lessons",
    name: "Life Lessons",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-600",
    count: 428,
    description: "Hard-earned wisdom from life experience",
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: <Users className="w-6 h-6" />,
    count: 98,
    color: "bg-indigo-100 text-indigo-600",
    description: "Lessons from leading teams and organizations",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find lessons that resonate with your journey. Browse through our
            diverse categories to discover wisdom that matters to you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/public-lessons?category=${encodeURIComponent(category.name)}`}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
            >
              <div
                className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {category.count} lessons
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;