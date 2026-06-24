import { useEffect, useState } from "react";
import { Users, BookOpen, Star, Heart, TrendingUp, Award } from "lucide-react";
import useAxios from "../../hooks/useAxios";

const StatsSection = () => {
  const [stats, setStats] = useState({
    users: 0,
    lessons: 0,
    categories: 0,
    favorites: 0,
  });

  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, lessonsRes] = await Promise.all([
          axiosInstance.get("/users"),
          axiosInstance.get("/lessons?status=approved"),
        ]);

        setStats({
          users: usersRes.data?.total || 1250,
          lessons: lessonsRes.data?.total || 3200,
          categories: 12,
          favorites: 890,
        });
      } catch {
        // Fallback values
        setStats({
          users: 1250,
          lessons: 3200,
          categories: 12,
          favorites: 890,
        });
      }
    };

    fetchStats();
  }, [axiosInstance]);

  const statItems = [
    {
      icon: <Users className="w-6 h-6" />,
      value: stats.users,
      label: "Active Learners",
      suffix: "+",
      gradient: "from-[#6E9277] to-[#C9D8C5]",
      bgColor: "bg-[#6E9277]/10",
      textColor: "text-[#6E9277]",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      value: stats.lessons,
      label: "Lessons Shared",
      suffix: "+",
      gradient: "from-[#C9D8C5] to-[#EEF6EF]",
      bgColor: "bg-[#C9D8C5]/10",
      textColor: "text-[#C9D8C5]",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: stats.categories,
      label: "Knowledge Areas",
      suffix: "+",
      gradient: "from-[#6E9277] to-[#C9D8C5]",
      bgColor: "bg-[#6E9277]/10",
      textColor: "text-[#6E9277]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: stats.favorites,
      label: "Favorites Saved",
      suffix: "+",
      gradient: "from-[#C9D8C5] to-[#EEF6EF]",
      bgColor: "bg-[#C9D8C5]/10",
      textColor: "text-[#C9D8C5]",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#F8FAF6]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(31,77,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,77,43,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F8F3A]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6E9277]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F8F3A]/10 border border-[#2F8F3A]/20 mb-6">
            <Award className="w-4 h-4 text-[#D9A441]" />
            <span className="text-[#6B7280] text-sm font-medium">Trusted by learners worldwide</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            Our Impact in <span className="bg-gradient-to-r from-[#2F8F3A] via-[#6E9277] to-[#C9D8C5] bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Join a thriving community of knowledge seekers and sharers making a difference every day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-3xl bg-white border border-[#E5ECE2] hover:border-[#2F8F3A]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon container */}
              <div className={`relative w-16 h-16 rounded-2xl ${item.bgColor} ${item.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Value */}
              <div className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-2 tabular-nums">
                {item.value.toLocaleString()}
                <span className={`${item.textColor}`}>{item.suffix}</span>
              </div>

              {/* Label */}
              <div className="relative text-sm md:text-base text-[#6B7280] font-medium">
                {item.label}
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#2F8F3A]/10 via-[#6E9277]/10 to-[#C9D8C5]/10 border border-[#E5ECE2]">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${["1494790108377-be9c29b29330","1507003211169-0a1dd7228f2d","1438761681033-6461ffad8d80","1500648767791-00dcc994a43e"][i]}?w=100&h=100&fit=crop&crop=face`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-[#1F2937] font-semibold">Join 10,000+ learners</div>
              <div className="text-[#6B7280] text-sm">Start your journey today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
