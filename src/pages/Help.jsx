import React, { useState } from "react";
import { Section, SectionHeader, Container, Grid } from "../components/UI/Section";
import { Card, CardBody } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { ChevronDown, Mail, MessageSquare, Phone, Search } from "lucide-react";
import { Link } from "react-router";

const Help = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      id: 1,
      question: "How do I create a lesson?",
      answer:
        "To create a lesson, navigate to the 'Add Lessons' section in your dashboard. Fill in the lesson details including title, description, category, and supporting materials. Once you submit, your lesson will go through our approval process.",
    },
    {
      id: 2,
      question: "Can I edit my lesson after publishing?",
      answer:
        "Yes, you can edit your published lessons anytime from the 'My Lessons' section in your dashboard. However, major changes may require re-approval from our moderation team.",
    },
    {
      id: 3,
      question: "What is the premium membership?",
      answer:
        "Premium membership gives you access to exclusive lessons, advanced analytics for your lessons, no limits on uploads, and priority support. You can upgrade from your dashboard.",
    },
    {
      id: 4,
      question: "How are lessons moderated?",
      answer:
        "All lessons go through our automated content check and manual review by our moderation team. We ensure all content is appropriate, original, and valuable to our community.",
    },
    {
      id: 5,
      question: "Can I download lessons?",
      answer:
        "Premium members can download lessons in PDF format. Free members can read lessons on the platform and bookmark them for later.",
    },
    {
      id: 6,
      question: "How do I report inappropriate content?",
      answer:
        "You can report any content you find inappropriate using the 'Report' button on the lesson page. Our moderation team will review it within 24 hours.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions anytime",
      contact: "support@lessonly.app",
      link: "mailto:support@lessonly.app",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 9 AM - 6 PM EST",
      link: "#",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for urgent issues",
      contact: "+880 1700-000000",
      link: "tel:+8801700000000",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <Section bgVariant="primary" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions or contact our support team
            </p>
          </div>
        </Container>
      </Section>

      {/* Support Channels */}
      <Section padding="lg">
        <Container>
          <Grid columns={{ xs: 1, md: 3 }} gap="lg">
            {supportChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a href={channel.link} key={channel.title}>
                  <Card hoverable className="h-full">
                    <CardBody className="text-center">
                      <Icon className="w-12 h-12 text-[#2F8F3A] mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {channel.description}
                      </p>
                      <p className="text-[#2F8F3A] font-semibold">
                        {channel.contact}
                      </p>
                    </CardBody>
                  </Card>
                </a>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg" bgVariant="gray">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick Answers"
            center
          />

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F8F3A] outline-none"
              />
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-2xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="overflow-hidden">
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === faq.id && (
                  <>
                    <div className="h-px bg-gray-200"></div>
                    <CardBody>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </CardBody>
                  </>
                )}
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No FAQs found. Try a different search query.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="xl">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Didn't find what you're looking for?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is here to help. Reach out to us anytime.
            </p>
            <a href="mailto:support@lessonly.app">
              <Button>Contact Support</Button>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Help;
