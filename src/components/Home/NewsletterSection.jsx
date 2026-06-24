import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#F8FAF6]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#2F8F3A]/10 via-[#6E9277]/10 to-[#C9D8C5]/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(31,77,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,77,43,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F8F3A]/20 to-[#6E9277]/20 border border-[#2F8F3A]/30 mb-6">
            <Mail className="w-8 h-8 text-[#2F8F3A]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            Stay Updated with{" "}
            <span className="bg-gradient-to-r from-[#2F8F3A] via-[#6E9277] to-[#C9D8C5] bg-clip-text text-transparent">
              Latest Wisdom
            </span>
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto text-lg">
            Get weekly insights, trending lessons, and community highlights
            delivered directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="bg-[#2F8F3A]/10 backdrop-blur-xl rounded-2xl p-6 inline-flex items-center gap-3 border border-[#2F8F3A]/30">
              <CheckCircle className="w-6 h-6 text-[#2F8F3A]" />
              <span className="text-[#1F2937] font-medium">
                Thanks for subscribing! Check your inbox for confirmation.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-[#1F2937] placeholder-[#8A8F98] border border-[#E5ECE2] focus:outline-none focus:border-[#2F8F3A]/50 focus:ring-2 focus:ring-[#2F8F3A]/20 backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="group px-8 py-4 bg-gradient-to-r from-[#2F8F3A] to-[#23722D] text-white font-semibold rounded-xl hover:from-[#23722D] hover:to-[#1F4D2B] transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-[#2F8F3A]/25 hover:shadow-[#2F8F3A]/40"
              >
                {isSubscribing ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-[#8A8F98] text-sm mt-6 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[#2F8F3A]" />
            No spam. Unsubscribe anytime. Join 5,000+ subscribers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
