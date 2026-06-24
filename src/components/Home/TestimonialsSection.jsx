import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Patel",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content:
      "Lessonly helped me document my design philosophy and career pivots. Looking back at my entries, I can see how far I've grown.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "I share lessons from my research failures and breakthroughs. The community feedback has shaped how I approach problems today.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofia Reyes",
    role: "High School Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "My students inspire me daily. Lessonly gives me a space to capture those teaching moments that textbooks never cover.",
    rating: 5,
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "Every failed pitch and late-night pivot taught me something. This platform helps me turn those lessons into guidance for others.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#EEF6EF]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2F8F3A]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#6E9277]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#6E9277] via-[#EEF6EF] to-[#2F8F3A] bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Join thousands of learners who have found wisdom and inspiration on
            their personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white backdrop-blur-xl rounded-3xl p-6 border border-[#E5ECE2] hover:border-[#2F8F3A]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F8F3A]/10 to-[#6E9277]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Quote className="relative w-10 h-10 text-[#6E9277]/50 mb-4" />

              <p className="relative text-[#1F2937] text-sm mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2F8F3A]/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F2937] text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#6B7280]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="relative flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#D9A441] fill-[#D9A441]"
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
