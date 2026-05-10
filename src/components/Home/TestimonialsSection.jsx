import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=1",
    content:
      "DigitalLesson has transformed how I reflect on my career journey. The wisdom shared here has helped me make better decisions.",
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
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of learners who have found wisdom and inspiration on
            their personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-slate-700/50 rounded-2xl p-6 relative border border-gray-100 dark:border-slate-600"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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