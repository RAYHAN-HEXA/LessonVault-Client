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
          "bg-white/80 backdrop-blur-xl border-2 border-[#D9A441]/50 shadow-2xl shadow-[#D9A441]/20 md:scale-110 z-20",
        headerBg: "bg-gradient-to-br from-[#D9A441]/20 to-[#C49431]/20",
        headerText: "text-[#D9A441]",
        avatarBorder: "border-[4px] border-[#D9A441]",
        icon: (
          <Crown
            size={32}
            className="text-[#D9A441] fill-[#D9A441]/20 animate-pulse"
          />
        ),
        rankBadge: "bg-gradient-to-br from-[#D9A441] to-[#C49431] text-white border-[#D9A441]",
        footerBg: "bg-[#D9A441]/10",
        glowColor: "bg-[#D9A441]",
      };

    // RANK 2: SILVER
    if (index === 1)
      return {
        cardClasses: "bg-white/50 backdrop-blur-xl border border-[#9CA3AF]/50 shadow-xl z-10",
        headerBg: "bg-gradient-to-br from-[#9CA3AF]/20 to-[#6B7280]/20",
        headerText: "text-[#6B7280]",
        avatarBorder: "border-[3px] border-[#9CA3AF]",
        icon: <Medal size={28} className="text-[#6B7280]" />,
        rankBadge: "bg-gradient-to-br from-[#9CA3AF] to-[#6B7280] text-white border-[#9CA3AF]",
        footerBg: "bg-[#9CA3AF]/10",
        glowColor: "bg-[#9CA3AF]",
      };

    // RANK 3: BRONZE
    if (index === 2)
      return {
        cardClasses: "bg-white/50 backdrop-blur-xl border border-[#D9A441]/50 shadow-xl z-10",
        headerBg: "bg-gradient-to-br from-[#D9A441]/20 to-[#C49431]/20",
        headerText: "text-[#D9A441]",
        avatarBorder: "border-[3px] border-[#D9A441]",
        icon: <Medal size={28} className="text-[#D9A441]" />,
        rankBadge: "bg-gradient-to-br from-[#D9A441] to-[#C49431] text-white border-[#D9A441]",
        footerBg: "bg-[#D9A441]/10",
        glowColor: "bg-[#D9A441]",
      };

    // OTHERS
    return {
      cardClasses:
        "bg-white/50 backdrop-blur-xl border border-[#E5ECE2] hover:border-[#2F8F3A]/30 hover:bg-white/80 transition-all shadow-lg hover:shadow-[#2F8F3A]/10",
      headerBg: "bg-gradient-to-br from-[#2F8F3A]/20 to-[#1F4D2B]/20",
      headerText: "text-[#2F8F3A]",
      avatarBorder: "border-[2px] border-[#2F8F3A]/30",
      icon: <Star size={24} className="text-[#2F8F3A]/60" />,
      rankBadge: "bg-[#2F8F3A]/20 text-[#1F4D2B] border-[#2F8F3A]/30",
      footerBg: "bg-[#2F8F3A]/10",
      glowColor: "bg-[#2F8F3A]",
    };
  };

  if (loading) {
    return (
      <div className="w-full py-32 flex justify-center items-center bg-[#F8FAF6]">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2F8F3A]/20 rounded-full blur-2xl animate-pulse"></div>
            <Feather size={48} className="text-[#2F8F3A] animate-pulse relative" />
          </div>
          <p className="font-serif text-[#1F2937] tracking-widest uppercase text-sm">
            Loading contributors...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-24 px-4 md:px-8 relative font-sans overflow-hidden bg-[#F8FAF6]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E9277]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F8F3A]/10 border border-[#2F8F3A]/30">
            <Trophy size={14} className="text-[#2F8F3A] fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2F8F3A]">
              The Inner Circle
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1F2937]">
            Top Contributors
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg font-light">
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
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-br from-[#D9A441] via-[#F8FAF6] to-[#C49431] shadow-lg border border-white/40">
                      <Gem size={12} className="text-[#1F4D2B]" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1F4D2B]">
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
                    className={`w-28 h-28 rounded-full p-1 bg-white shadow-2xl ${styles.avatarBorder}`}
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
                  <h3 className="text-xl font-serif font-bold mb-1 line-clamp-1 text-[#1F2937]">
                    {contributor.email === user?.email
                      ? "You"
                      : contributor.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-medium tracking-wide mb-6 font-mono bg-[#F8FAF6] px-3 py-1.5 rounded-full max-w-full truncate border border-[#E5ECE2]">
                    {contributor.email}
                  </p>

                  {/* Stats Divider */}
                  <div className="w-12 h-[1px] bg-[#E5ECE2] mb-6"></div>

                  {/* Wisdom Count */}
                  <div
                    className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 ${styles.footerBg} border border-[#E5ECE2]`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        index === 0
                          ? "bg-gradient-to-br from-[#D9A441] to-[#C49431] text-white"
                          : "bg-gradient-to-br from-[#2F8F3A] to-[#1F4D2B] text-white"
                      }`}
                    >
                      <Feather size={16} />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-lg leading-none text-[#1F2937]">
                        {contributor.count}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">
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
