import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is DigitalLesson?",
    answer:
      "DigitalLesson is a platform for capturing, sharing, and discovering life's most valuable lessons. It's a community-driven vault where people preserve their wisdom and learn from others' experiences.",
  },
  {
    question: "Is DigitalLesson free to use?",
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
    <section className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 dark:text-gray-300">
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