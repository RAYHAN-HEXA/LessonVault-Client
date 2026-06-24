import React, { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert(
        "Email service not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env."
      );
      setIsSubmitting(false);
      return;
    }

    if (SERVICE_ID.startsWith("template_") || SERVICE_ID === TEMPLATE_ID) {
      alert(
        "EmailJS service ID appears incorrect. VITE_EMAILJS_SERVICE_ID should be your service ID (starts with 'service_')."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "Collaboration", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Failed to send message. Please check EmailJS configuration and try again.");
    }

    setIsSubmitting(false);
  };

  const SUBJECT_OPTIONS = ["Collaboration", "Support", "Feedback", "Other"];

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] pt-28 pb-12 px-4 lg:px-8 flex items-center justify-center font-sans relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6E9277]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2F8F3A]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-[#E5ECE2] overflow-hidden flex flex-col lg:flex-row min-h-[700px] relative z-10 shadow-xl">
        {/* Left Panel */}
        <div className="relative w-full lg:w-[40%] bg-gradient-to-br from-[#2F8F3A] to-[#1F4D2B] text-white p-10 lg:p-16 flex flex-col justify-between overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6E9277]/20 via-transparent to-transparent"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-wider uppercase">
              <MessageSquare className="w-3 h-3" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif leading-tight">
              Start a{" "}
              <span className="bg-gradient-to-r from-[#6E9277] to-[#F8FAF6] bg-clip-text text-transparent italic">
                conversation.
              </span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-sm">
              We believe in the power of shared wisdom. Whether you have a
              question or a story to tell, our door is always open.
            </p>
          </div>

          <div className="relative z-10 grid gap-6 mt-12">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider font-medium">
                  Email Us
                </p>
                <p className="text-lg text-white">hello@lessonly.app</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider font-medium">
                  Visit HQ
                </p>
                <p className="text-lg text-white">Mohammadpur, Dhaka</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-12 flex items-center gap-2 text-white/60 text-sm">
            <Globe className="w-4 h-4" />
            <span>lessonly.app &copy; {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-[60%] bg-[#F8FAF6]/50 p-10 lg:p-16 flex flex-col justify-center backdrop-blur-sm">
          <AnimatePresence exitBeforeEnter>
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg w-full mx-auto"
              >
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-2">
                    Send a Message
                  </h2>
                  <p className="text-[#6B7280] text-sm">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-white border border-[#E5ECE2] rounded-xl px-4 py-3 text-[#1F2937] focus:outline-none focus:border-[#2F8F3A] focus:ring-1 focus:ring-[#2F8F3A]/20 transition-all placeholder:text-[#8A8F98]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full bg-white border border-[#E5ECE2] rounded-xl px-4 py-3 text-[#1F2937] focus:outline-none focus:border-[#2F8F3A] focus:ring-1 focus:ring-[#2F8F3A]/20 transition-all placeholder:text-[#8A8F98]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      Subject
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SUBJECT_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, subject: opt })
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                            formData.subject === opt
                              ? "bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] text-white border-transparent shadow-lg shadow-[#2F8F3A]/25"
                              : "bg-white text-[#6B7280] border-[#E5ECE2] hover:border-[#2F8F3A] hover:text-[#2F8F3A]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="4"
                      className="w-full bg-white border border-[#E5ECE2] rounded-xl px-4 py-3 text-[#1F2937] focus:outline-none focus:border-[#2F8F3A] focus:ring-1 focus:ring-[#2F8F3A]/20 transition-all placeholder:text-[#8A8F98] resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] hover:from-[#1F4D2B] hover:to-[#2F8F3A] text-white font-medium py-4 rounded-xl shadow-lg shadow-[#2F8F3A]/25 hover:shadow-[#2F8F3A]/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center space-y-6 px-8"
              >
                <div className="w-20 h-20 rounded-full bg-[#2F8F3A]/20 text-[#2F8F3A] flex items-center justify-center mb-2 border border-[#2F8F3A]/30">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-serif text-[#1F2937]">Message Received</h2>
                <p className="text-[#6B7280] max-w-xs mx-auto">
                  Thank you for reaching out, {formData.name}. We have received
                  your message and will be in touch soon.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 rounded-xl bg-white border border-[#E5ECE2] text-[#2F8F3A] hover:bg-[#2F8F3A]/10 hover:border-[#2F8F3A] transition-all"
                >
                  Send another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Contact;
