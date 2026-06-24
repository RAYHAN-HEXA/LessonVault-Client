import React from "react";
import {
  Check,
  Crown,
  Star,
  ArrowRight,
  Minus,
  Shield,
  Zap,
  BookOpen,
  Feather,
  Layout,
  Copy,
} from "lucide-react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";

const UpgradePremium = () => {
  const { COLORS } = useTheme();
  const [copied, setCopied] = React.useState(false);

  const benefits = [
    {
      text: "Unlimited access to Lessonly Premium",
      icon: <BookOpen size={18} />,
    },
    {
      text: "Unlock exclusive 'Deep Dive' psychological breakdowns",
      icon: <Zap size={18} />,
    },
    {
      text: "Support the creators and curators directly",
      icon: <Crown size={18} />,
    },
    { text: "Ad-free, focused reading experience", icon: <Layout size={18} /> },
    {
      text: "Early access to new features and community tools",
      icon: <Star size={18} />,
    },
  ];

  const comparisonFeatures = [
    { name: "Access to Public Lessons", free: true, premium: true },
    { name: "Premium 'Deep Dive' Articles", free: false, premium: true },
    { name: "Ad-Free Experience", free: false, premium: true },
    { name: "Lesson Creation Limit", free: "3 / month", premium: "Unlimited" },
    { name: "Golden Contributor Badge", free: false, premium: true },
    { name: "Priority Community Listing", free: false, premium: true },
    { name: "Direct Support to Authors", free: false, premium: true },
  ];

  const axiosInstance = useAxios();
  const { user } = useAuth();

  const handlePayment = () => {
    const paymentInfo = {
      email: user.email,
    };
    axiosInstance.post("/payment-checkout-session", paymentInfo).then((res) => {
      console.log(res.data);
      window.location.href = res.data.url;
    });
  };

  const handleCopyTestCard = () => {
    const testCardInfo = `Stripe Test Card Details:
Card Number: 4242 4242 4242 4242
Expiry: 12/29
CVC: 123
Country: Bangladesh
Phone: +8801978730955`;

    navigator.clipboard.writeText(testCardInfo).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const renderCell = (value, isPremium) => {
    if (value === true)
      return (
        <div
          className={`mx-auto w-6 h-6 rounded-full flex items-center justify-center ${
            isPremium
              ? "bg-[#1F4D2B] text-white"
              : "bg-[#EEF6EF] text-[#8A8F98]"
          }`}
        >
          <Check size={14} strokeWidth={3} />
        </div>
      );
    if (value === false)
      return <Minus size={16} className="mx-auto text-[#C9D8C5]" />;

    return (
      <span
        className={`font-bold text-sm tracking-wide ${
          isPremium ? "text-[#1F4D2B]" : "text-[#8A8F98]"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <div
      className="min-h-screen w-full relative font-sans overflow-x-hidden selection:bg-[#2F8F3A] selection:text-white"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 fixed" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 lg:py-32">
        {/* 1. HEADER SECTION */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2F8F3A]/10 bg-[#F8FAF6]/50 text-[#1F4D2B] text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm shadow-sm">
            <Crown size={14} className="text-[#D9A441]" fill="currentColor" />
            <span>Membership Invitation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1F2937] mb-6 tracking-tight">
            Invest in your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] italic">
              legacy.
            </span>
          </h1>
          <p className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Join Lessonly Premium. Unlock the full
            archive, support the mission, and elevate your mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          {/* LARGE LEFT CARD: The Pitch & Price */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group animate-fade-in-up shadow-2xl shadow-[#2F8F3A]/5 border border-[#E5ECE2]">
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-[#1F2937] mb-4">
                Lifetime Access
              </h2>
              <p className="text-[#6B7280] text-lg mb-8 max-w-md leading-relaxed">
                One simple payment. No subscriptions. No hidden fees. Just pure
                wisdom, forever.
              </p>

              {/* Benefits List inside card */}
              <div className="space-y-4 mb-10">
                {benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="p-1.5 rounded-full bg-[#F8FAF6] text-[#1F4D2B] group-hover/item:bg-[#2F8F3A] group-hover/item:text-white transition-colors">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[#1F2937] font-medium">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-8 border-t border-[#E5ECE2]">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#6B7280] block mb-1">
                    Total Price
                  </span>
                  <span className="text-5xl font-serif font-bold text-[#1F2937]">
                    ৳1500
                  </span>
                </div>

                <div className="h-px w-full sm:w-auto sm:h-12 flex-1 hidden sm:block"></div>

                <button
                  onClick={handlePayment}
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] text-white rounded-xl font-bold text-lg hover:from-[#1F4D2B] hover:to-[#2F8F3A] transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 group/btn cursor-pointer"
                >
                  <span>Accept Invite</span>
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>

                {/* Demo: Copy Test Card Button */}
                <button
                  onClick={handleCopyTestCard}
                  className="w-full sm:w-auto px-10 py-3 bg-transparent border-2 border-[#2F8F3A]/20 hover:bg-[#2F8F3A]/5 text-[#6B7280] hover:text-[#2F8F3A] rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-[#2F8F3A]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Demo: Copy Test Card</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-[#6B7280] mt-4 text-center sm:text-left flex items-center gap-1 justify-center sm:justify-start">
                <Shield size={12} /> Secure Stripe Checkout • 100% Money-back
                guarantee
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Benefits (Vertical Stack) */}
          <div
            className="lg:col-span-5 flex flex-col gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Benefit 1 */}
            <div className="flex-1 bg-white rounded-[2rem] p-8 flex items-center gap-6 hover:shadow-lg transition-shadow shadow-sm border border-[#E5ECE2]">
              <div className="w-16 h-16 rounded-2xl bg-[#F8FAF6] flex items-center justify-center text-[#2F8F3A] shrink-0">
                <Feather size={28} />
              </div>
              <div>
                <h3 className="text-[#1F2937] font-bold text-xl mb-1">
                  Creation Unlimited
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Create and publish without limits. Your wisdom has no bounds.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex-1 bg-white rounded-[2rem] p-8 flex items-center gap-6 hover:shadow-lg transition-shadow shadow-sm border border-[#E5ECE2]">
              <div className="w-16 h-16 rounded-2xl bg-[#F8FAF6] flex items-center justify-center text-[#D9A441] shrink-0">
                <Crown size={28} />
              </div>
              <div>
                <h3 className="text-[#1F2937] font-bold text-xl mb-1">
                  Golden Badge
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Stand out in the community with the prestigious Gold status.
                </p>
              </div>
            </div>

            {/* Benefit 3 (CTA Card) */}
            <div
              className="flex-1 bg-gradient-to-br from-[#2F8F3A] to-[#1F4D2B] rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group cursor-pointer shadow-xl"
              onClick={handlePayment}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#1F4D2B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              <Star
                size={32}
                className="mb-3 relative z-10 text-[#D9A441]"
                fill="currentColor"
              />
              <h3 className="font-serif font-bold text-2xl relative z-10">
                Upgrade Now
              </h3>
              <p className="text-white/60 text-sm font-medium relative z-10 mt-1">
                Join 1,000+ members
              </p>
            </div>
          </div>
        </div>

        {/* 3. THE COMPARISON TABLE (Clean Light Mode) */}
        <div
          className="max-w-5xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-[#1F2937]">
              The Distinction
            </h3>
            <p className="text-[#6B7280] mt-2">Why the upgrade matters</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-[#E5ECE2] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#2F8F3A]/5">
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#E5ECE2]">
                    <th className="p-8 text-left text-xs font-bold text-[#6B7280] uppercase tracking-widest w-5/12 pl-10">
                      Feature
                    </th>
                    <th className="p-8 text-xs font-bold text-[#6B7280] uppercase tracking-widest w-3/12">
                      Guest
                    </th>
                    <th className="p-0 w-4/12 relative bg-[#F8FAF6]">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#2F8F3A]"></div>
                      <div className="p-8 text-xs font-bold text-[#1F4D2B] uppercase tracking-widest flex items-center justify-center gap-2">
                        <Crown
                          size={14}
                          className="text-[#D9A441]"
                          fill="currentColor"
                        />{" "}
                        Member
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={index}
                      className="group border-b border-[#F8FAF6] hover:bg-[#F8FAF6] transition-colors last:border-none"
                    >
                      <td className="p-6 pl-10 text-left font-serif font-bold text-[#1F2937] text-base">
                        {row.name}
                      </td>
                      <td className="p-6">{renderCell(row.free, false)}</td>
                      <td className="p-6 bg-[#F8FAF6] border-l border-[#E5ECE2] relative">
                        {/* Hover Highlight */}
                        <div className="absolute inset-0 bg-[#2F8F3A] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative z-10">
                          {renderCell(row.premium, true)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handlePayment}
              className="text-[#6B7280] hover:text-[#2F8F3A] transition-colors text-sm font-medium border-b border-transparent hover:border-[#2F8F3A] pb-1"
            >
              Questions? Contact Support
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default UpgradePremium;
