import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=1",
    content:
      "LessonVault has transformed how I reflect on my career journey. The wisdom shared here has helped me make better decisions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=3",
    content:
      "Finding a community that values life lessons and personal growth is rare. This platform fills that gap perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=5",
    content:
      "The stories and insights from other users have been invaluable in my personal and professional development.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Teacher",
    image: "https://i.pravatar.cc/150?img=8",
    content:
      "I've been able to capture and share my teaching experiences in a meaningful way. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Join thousands of learners who have found wisdom and inspiration on
            their personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Quote className="relative w-10 h-10 text-violet-400/50 mb-4" />

              <p className="relative text-slate-300 text-sm mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="relative flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                    size={16}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
