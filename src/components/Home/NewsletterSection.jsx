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
    <section className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-6">
            <Mail className="w-8 h-8 text-violet-400" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stay Updated with{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Latest Wisdom
            </span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
            Get weekly insights, trending lessons, and community highlights
            delivered directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="bg-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 inline-flex items-center gap-3 border border-emerald-500/30">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-medium">
                Thanks for subscribing! Check your inbox for confirmation.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-fuchsia-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
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

          <p className="text-slate-500 text-sm mt-6 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-violet-400" />
            No spam. Unsubscribe anytime. Join 5,000+ subscribers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
