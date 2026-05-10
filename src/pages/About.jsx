import React from "react";
import { Section, SectionHeader, Container, Grid, Divider, Spacer } from "../components/UI/Section";
import { Card, CardBody } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { Users, Zap, Target, Award, Lightbulb, Globe } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Lessons Shared", value: "10K+", icon: Lightbulb },
    { label: "Countries", value: "120+", icon: Globe },
    { label: "Community Rating", value: "4.9/5", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create a global platform where wisdom and knowledge are preserved, shared, and celebrated for generations to come.",
    },
    {
      icon: Zap,
      title: "Our Vision",
      description:
        "Empowering learners and educators worldwide to exchange valuable life lessons and accelerate personal growth.",
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description:
        "Community-driven, transparent, inclusive, and committed to fostering authentic learning experiences.",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Michael Chen", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Emma Wilson", role: "Head of Community", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
    { name: "David Martinez", role: "Product Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24">
      {/* Hero */}
      <Section bgVariant="primary" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About DigitalLesson
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A community-driven platform dedicated to preserving and sharing life's greatest lessons with the world.
            </p>
            <div className="flex gap-4 justify-center">
              <Button>Join Our Community</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section padding="lg">
        <Container>
          <Grid columns={{ xs: 2, md: 4 }} gap="lg">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardBody>
                    <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </CardBody>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Divider />

      {/* Mission, Vision, Values */}
      <Section padding="lg" bgVariant="gray">
        <Container>
          <SectionHeader
            title="Our Core Values"
            subtitle="What Drives Us"
            center
          />
          <Grid columns={{ xs: 1, md: 3 }} gap="lg">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} hoverable>
                  <CardBody>
                    <Icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Divider />

      {/* Team */}
      <Section padding="lg">
        <Container>
          <SectionHeader
            title="Meet Our Team"
            subtitle="The Minds Behind DigitalLesson"
            center
          />
          <Grid columns={{ xs: 1, sm: 2, md: 4 }} gap="lg">
            {team.map((member) => (
              <Card key={member.name} className="text-center" hoverable>
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardBody>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {member.role}
                  </p>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Divider />

      {/* CTA Section */}
      <Section bgVariant="primary" padding="xl">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Share Your Story?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of educators and learners who are transforming lives through shared wisdom.
            </p>
            <Link to="/auth/register">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
