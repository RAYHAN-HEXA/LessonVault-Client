import React from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import Logo from "./Logo";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router";

const FooterLink = ({ href, children, to }) => {
  if (to) {
    return (
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors text-sm font-light"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors text-sm font-light"
    >
      {children}
    </a>
  );
};

const SocialIcon = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-gray-700 hover:border-blue-600"
  >
    <Icon size={16} />
  </a>
);

const Footer = () => {
  const { COLORS } = useTheme();

  return (
    <footer
      className="w-full text-white font-sans pt-16 pb-8 border-t border-gray-800"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-gray-800 pb-12">
          {/* 1. Brand Identity */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-8">
            <Logo />

            <p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed">
              Preserve and share your life's greatest lessons with a global community of learners and educators.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram" />
              <SocialIcon Icon={Mail} href="mailto:support@digitallesson.com" label="Email" />
            </div>
          </div>

          {/* 2. Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Platform
            </h4>
            <div className="flex flex-col space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/public-lessons">Lessons</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </div>
          </div>

          {/* 3. Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Company
            </h4>
            <div className="flex flex-col space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/help">Help & Support</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink href="mailto:jobs@digitallesson.com">Careers</FooterLink>
            </div>
          </div>

          {/* 4. Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Legal
            </h4>
            <div className="flex flex-col space-y-3">
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="#">Cookie Settings</FooterLink>
              <FooterLink href="#">Sitemap</FooterLink>
            </div>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-wide">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} DigitalLesson, Inc. All rights reserved.
          </p>
          <div className="order-1 md:order-2 flex items-center space-x-6 text-gray-400">
            <span className="flex items-center space-x-2">
              <Globe size={12} />
              <span>English</span>
            </span>
            <span className="flex items-center space-x-2">
              <MapPin size={12} />
              <span>Worldwide</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
