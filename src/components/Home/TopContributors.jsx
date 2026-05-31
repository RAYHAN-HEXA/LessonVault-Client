import React, { useEffect, useState } from "react";
import { Crown, Star, Feather, Trophy, Medal, Gem } from "lucide-react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const TopContributors = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const res = await axiosInstance.get("/top-contributors-week");
        setContributors(res.data.contributors);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch top contributors", error);
        setLoading(false);
      }
    };

    fetchContributors();
  }, [axiosInstance]);

  const getRankStyles = (index) => {
    // RANK 1: THE CHAMPION
    if (index === 0)
      return {
        cardClasses:
          "bg-slate-900/80 backdrop-blur-xl border-2 border-amber-500/50 shadow-2xl shadow-amber-500/20 md:scale-110 z-20",
        headerBg: "bg-gradient-to-br from-amber-500/20 to-yellow-500/20",
        headerText: "text-amber-400",
        avatarBorder: "border-[4px] border-amber-500",
        icon: (
          <Crown
            size={32}
            className="text-amber-400 fill-amber-400/20 animate-pulse"
          />
        ),
        rankBadge: "bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900 border-amber-400",
        footerBg: "bg-amber-500/10",
        glowColor: "bg-amber-500",
      };

    // RANK 2: SILVER
    if (index === 1)
      return {
        cardClasses: "bg-slate-900/50 backdrop-blur-xl border border-slate-400/50 shadow-xl z-10",
        headerBg: "bg-gradient-to-br from-slate-400/20 to-gray-400/20",
        headerText: "text-slate-300",
        avatarBorder: "border-[3px] border-slate-400",
        icon: <Medal size={28} className="text-slate-300" />,
        rankBadge: "bg-gradient-to-br from-slate-300 to-gray-400 text-slate-900 border-slate-300",
        footerBg: "bg-slate-400/10",
        glowColor: "bg-slate-400",
      };

    // RANK 3: BRONZE
    if (index === 2)
      return {
        cardClasses: "bg-slate-900/50 backdrop-blur-xl border border-orange-700/50 shadow-xl z-10",
        headerBg: "bg-gradient-to-br from-orange-600/20 to-orange-800/20",
        headerText: "text-orange-400",
        avatarBorder: "border-[3px] border-orange-500",
        icon: <Medal size={28} className="text-orange-400" />,
        rankBadge: "bg-gradient-to-br from-orange-400 to-orange-600 text-slate-900 border-orange-400",
        footerBg: "bg-orange-500/10",
        glowColor: "bg-orange-500",
      };

    // OTHERS
    return {
      cardClasses:
        "bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-violet-500/30 hover:bg-slate-900/80 transition-all shadow-lg hover:shadow-violet-500/10",
      headerBg: "bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20",
      headerText: "text-violet-400",
      avatarBorder: "border-[2px] border-violet-500/30",
      icon: <Star size={24} className="text-violet-400/60" />,
      rankBadge: "bg-violet-500/20 text-violet-300 border-violet-500/30",
      footerBg: "bg-violet-500/10",
      glowColor: "bg-violet-500",
    };
  };

  if (loading) {
    return (
      <div className="w-full py-32 flex justify-center items-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-500/20 rounded-full blur-2xl animate-pulse"></div>
            <Feather size={48} className="text-slate-400 animate-pulse relative" />
          </div>
          <p className="font-serif text-white tracking-widest uppercase text-sm">
            Loading contributors...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-24 px-4 md:px-8 relative font-sans overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-500/10 border border-slate-500/30">
            <Trophy size={14} className="text-slate-300 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              The Inner Circle
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            Top Contributors
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Honoring the architects of wisdom who have contributed the most to
            our collective consciousness.
          </p>
        </div>

        {/* --- CONTRIBUTORS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-end justify-center pb-12">
          {contributors.map((contributor, index) => {
            const styles = getRankStyles(index);

            return (
              <div
                key={contributor.email}
                className={`relative rounded-[2rem] overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 group ${styles.cardClasses}`}
              >
                {/* 1. Header Background  */}
                <div
                  className={`absolute top-0 w-full h-32 ${styles.headerBg} rounded-b-[50%] scale-150 transition-transform duration-700 group-hover:scale-[1.6]`}
                ></div>

                {/* 2. Premium Badge */}
                {contributor.isPremium === "true" && (
                  <div className="absolute top-4 right-4 z-30">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-br from-[#D4C5A8] via-[#FDFBF7] to-[#C3B08D] shadow-lg border border-white/40">
                      <Gem size={12} className="text-[#1A2F23]" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1A2F23]">
                        Premium
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. Rank Badge (Floating) */}
                <div
                  className={`absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-lg flex items-center justify-center border-2 z-30 font-serif font-bold text-lg ${styles.rankBadge}`}
                >
                  #{index + 1}
                </div>

                {/* 4. Avatar & Icon Wrapper */}
                <div className="relative mt-20 mb-6 z-10">
                  {/* Crown/Icon floating above avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 drop-shadow-lg transform transition-transform group-hover:scale-110">
                    {styles.icon}
                  </div>

                  {/* The Image */}
                  <div
                    className={`w-28 h-28 rounded-full p-1 bg-slate-900 shadow-2xl ${styles.avatarBorder}`}
                  >
                    <img
                      src={contributor.authorImage}
                      alt={contributor.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Glow for #1 */}
                  {index === 0 && (
                    <div className={`absolute inset-0 ${styles.glowColor} rounded-full blur-2xl opacity-40 -z-10 animate-pulse`}></div>
                  )}
                </div>

                {/* 5. Content Body */}
                <div className="w-full px-6 pb-8 flex flex-col items-center flex-grow z-10">
                  <h3 className="text-xl font-serif font-bold mb-1 line-clamp-1 text-white">
                    {contributor.email === user?.email
                      ? "You"
                      : contributor.name}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium tracking-wide mb-6 font-mono bg-slate-800/50 px-3 py-1.5 rounded-full max-w-full truncate border border-white/10">
                    {contributor.email}
                  </p>

                  {/* Stats Divider */}
                  <div className="w-12 h-[1px] bg-white/10 mb-6"></div>

                  {/* Wisdom Count */}
                  <div
                    className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 ${styles.footerBg} border border-white/10`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        index === 0
                          ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900"
                          : "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                      }`}
                    >
                      <Feather size={16} />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-lg leading-none text-white">
                        {contributor.count}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Lessons Shared
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;
