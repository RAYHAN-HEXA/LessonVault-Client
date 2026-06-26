import React, { useState } from "react";
import { Section, SectionHeader, Container, Grid } from "../components/UI/Section";
import { Card, CardBody } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "How Losing My First Job Taught Me What Matters",
      excerpt:
        "Getting fired felt like the end of the world. Three years later, I run my own consultancy. Here's what that rejection really taught me...",
      author: "Rafiq Hassan",
      date: "Apr 2, 2025",
      category: "personal-growth",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "What I Wish I Knew Before My First Coding Bootcamp",
      excerpt:
        "I signed up expecting to learn JavaScript. I left with a completely different understanding of how I learn. Here's the honest truth...",
      author: "Nadia Karim",
      date: "Mar 28, 2025",
      category: "education",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Raising Kids Ta Me More Than Any MBA",
      excerpt:
        "Patience, negotiation, crisis management, and unconditional love. Parenthood is the hardest leadership role I've ever held...",
      author: "Sofia Reyes",
      date: "Mar 22, 2025",
      category: "personal-growth",
      image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "The Quiet Power of Journaling Every Morning",
      excerpt:
        "I started writing for 10 minutes before breakfast. Six months later, my anxiety dropped and my decisions improved. Here's my system...",
      author: "Daniel Kim",
      date: "Mar 18, 2025",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Why I Share My Failures Publicly",
      excerpt:
        "Most people hide their mistakes. I write about mine. The response from strangers has been the most meaningful feedback of my career...",
      author: "Tanvir Ahmed",
      date: "Mar 12, 2025",
      category: "education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "From Burnout to Balance: A Teacher's Story",
      excerpt:
        "After 12 years in the classroom, I nearly quit. What brought me back was not motivation but a simple daily practice...",
      author: "Sara Begum",
      date: "Mar 5, 2025",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
  ];

  const categories = [
    { value: "all", label: "All Articles" },
    { value: "personal-growth", label: "Personal Growth" },
    { value: "education", label: "Education" },
    { value: "wellness", label: "Wellness" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <Section bgVariant="primary" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Knowledge Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, tips, and stories from educators and learners around the world
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Content */}
      <Section padding="lg">
        <Container>
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F8F3A] outline-none"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat.value
                      ? "bg-[#2F8F3A] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap="lg">
              {filteredPosts.map((post) => (
                <Card key={post.id} hoverable className="flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="h-40 overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <CardBody className="flex-1 flex flex-col justify-between">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#2F8F3A] transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#EEF6EF] flex items-center justify-center">
                          <User size={14} className="text-[#2F8F3A]" />
                        </div>
                        <span className="text-xs font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <button className="text-[#2F8F3A] hover:text-[#1F4D2B]">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                No articles found matching your search
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-[#2F8F3A] hover:text-[#1F4D2B] font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section bgVariant="secondary" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest articles, tips, and insights delivered to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F8F3A] outline-none"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Blog;
