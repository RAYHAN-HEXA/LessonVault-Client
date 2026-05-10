import React, { useState } from "react";
import { Section, SectionHeader, Container, Grid } from "../../components/UI/Section";
import { Card, CardBody } from "../../components/UI/Card";
import { Button } from "../../components/UI/Button";
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Life Lessons I Learned from Failure",
      excerpt:
        "Failure isn't the opposite of success, it's a stepping stone towards it. Here are the most valuable lessons...",
      author: "Sarah Chen",
      date: "Mar 15, 2025",
      category: "personal-growth",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Art of Effective Teaching in the Digital Age",
      excerpt:
        "Online education has transformed how we learn and teach. Discover the best practices for engaging digital learners...",
      author: "Michael Rodriguez",
      date: "Mar 12, 2025",
      category: "education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building Resilience: A Practical Guide",
      excerpt:
        "Resilience is not about never falling down, it's about getting back up stronger every time. Learn practical strategies...",
      author: "Emma Wilson",
      date: "Mar 10, 2025",
      category: "personal-growth",
      image: "https://images.unsplash.com/photo-1552693938-d5a9b7f3a1b6?w=600&h=400&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "How to Create Engaging Educational Content",
      excerpt:
        "Creating content that resonates with learners requires understanding your audience and delivering value. Here's how...",
      author: "David Park",
      date: "Mar 8, 2025",
      category: "education",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Mindfulness in Modern Learning",
      excerpt:
        "Mindfulness practices can significantly improve focus, retention, and overall well-being. Explore the science behind it...",
      author: "Lisa Anderson",
      date: "Mar 5, 2025",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "The Future of Knowledge Sharing",
      excerpt:
        "As technology evolves, so does the way we share knowledge. Let's explore what the future holds for educators...",
      author: "James Thompson",
      date: "Mar 1, 2025",
      category: "education",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      readTime: "6 min read",
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
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24">
      {/* Hero */}
      <Section bgVariant="primary" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Knowledge Hub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
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
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
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
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
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
                  <div className="h-40 overflow-hidden bg-gray-100 dark:bg-slate-700">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <CardBody className="flex-1 flex flex-col justify-between">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <User size={14} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {post.author}
                        </span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No articles found matching your search
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest articles, tips, and insights delivered to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
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
