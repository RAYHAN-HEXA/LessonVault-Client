import { Link } from "react-router";
import { ArrowRight, BookOpen, Users, Sparkles, TrendingUp, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden border border-white/10">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl"></div>

          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-6">
                <Zap className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-300">Start Your Journey</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Share Your{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Wisdom?
                </span>
              </h2>

              <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
                Join our community of lifelong learners and thought leaders.
                Share your experiences and help others grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth/register"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/public-lessons"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                >
                  Explore Lessons
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-violet-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">10K+</div>
                  <div className="text-slate-400 text-sm">Lessons Shared</div>
                </div>
                <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:-translate-y-2 mt-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-fuchsia-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">5K+</div>
                  <div className="text-slate-400 text-sm">Active Members</div>
                </div>
                <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-slate-400 text-sm">Categories</div>
                </div>
                <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 mt-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">100K+</div>
                  <div className="text-slate-400 text-sm">Lives Impacted</div>
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
