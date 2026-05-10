import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
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
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Wisdom
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get weekly insights, trending lessons, and community highlights
            delivered directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-300" />
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
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubscribing ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-blue-200 text-sm mt-4">
            No spam. Unsubscribe anytime. Join 5,000+ subscribers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;