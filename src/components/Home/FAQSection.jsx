import { useState } from "react";
import { ChevronDown, HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Lessonly?",
    answer:
      "Lessonly is a digital life lessons platform where you can create, store, share, like, comment, favorite, and browse meaningful life lessons and personal wisdom.",
  },
  {
    question: "Is Lessonly free to use?",
    answer:
      "Yes, the basic features are completely free. We also offer a premium membership with additional features like unlimited storage, advanced analytics, and ad-free experience.",
  },
  {
    question: "How do I share my lessons?",
    answer:
      "Simply create an account, click on 'Add Lesson' from your dashboard, fill in the details about your experience and the lesson you learned, and publish it for the community to see.",
  },
  {
    question: "Can I keep my lessons private?",
    answer:
      "Absolutely! You can choose to keep your lessons private, share them with specific people, or make them public for the entire community to benefit from.",
  },
  {
    question: "How do I search for specific lessons?",
    answer:
      "Use our Explore page to search by keywords, filter by categories, sort by date or popularity, and find lessons that resonate with your current life situation.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We take data security seriously. Your personal information and lessons are encrypted and stored securely. We never share your data with third parties without your consent.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 relative overflow-hidden bg-[#F8FAF6]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#6E9277]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2F8F3A]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F8F3A]/20 to-[#1F4D2B]/20 border border-[#2F8F3A]/30 mb-6">
            <HelpCircle className="w-8 h-8 text-[#2F8F3A]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#2F8F3A] via-[#6E9277] to-[#1F4D2B] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-xl rounded-2xl border border-[#E5ECE2] overflow-hidden hover:border-[#2F8F3A]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-[#1F2937] pr-4 group-hover:text-[#2F8F3A] transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-br from-[#2F8F3A] to-[#1F4D2B]"
                    : "bg-[#F8FAF6] group-hover:bg-[#2F8F3A]/10"
                }`}>
                  {openIndex === index ? (
                    <ChevronDown className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#6B7280]" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-[#6B7280] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
