import { Link } from "react-router";
import { ArrowRight, BookOpen, Users, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Share Your Wisdom?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                Join our community of lifelong learners and thought leaders.
                Share your experiences and help others grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/public-lessons"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                >
                  Explore Lessons
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <BookOpen className="w-10 h-10 mx-auto mb-3 text-white/80" />
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-blue-200 text-sm">Lessons Shared</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center mt-8">
                  <Users className="w-10 h-10 mx-auto mb-3 text-white/80" />
                  <div className="text-3xl font-bold text-white">5K+</div>
                  <div className="text-blue-200 text-sm">Active Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-3 text-white/80" />
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-blue-200 text-sm">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center mt-8">
                  <div className="text-3xl font-bold text-white">100K+</div>
                  <div className="text-blue-200 text-sm"> Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;