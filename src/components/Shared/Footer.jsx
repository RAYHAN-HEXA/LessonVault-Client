import React from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Github,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router";

const FooterLink = ({ href, children, to }) => {
  if (to) {
    return (
      <Link
        to={to}
        className="text-[#6B7280] hover:text-[#2F8F3A] transition-all duration-300 text-sm font-light hover:translate-x-1 inline-block"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="text-[#6B7280] hover:text-[#2F8F3A] transition-all duration-300 text-sm font-light hover:translate-x-1 inline-block"
    >
      {children}
    </a>
  );
};

const SocialIcon = ({ Icon: SocialIconComponent, href, label, gradient }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className={`w-10 h-10 flex items-center justify-center rounded-xl text-white bg-gradient-to-br ${gradient} opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#2F8F3A]/20`}
  >
    <SocialIconComponent size={18} />
  </a>
);

const Footer = () => {
  const { COLORS } = useTheme();

  return (
    <footer
      className="w-full text-[#1F2937] font-sans pt-16 pb-8 border-t border-[#E5ECE2] relative overflow-hidden"
      style={{ backgroundColor: "#F8FAF6" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6E9277]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2F8F3A]/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(110,146,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(110,146,119,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-[#E5ECE2] pb-12">
          {/* 1. Brand Identity */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-8">
            <div className="flex items-center gap-3">
              <Logo />
            </div>

            <p className="text-[#6B7280] text-sm max-w-sm font-light leading-relaxed">
              Lessonly - Digital Life Lessons Platform. Share your wisdom and learn from others.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" gradient="from-[#2F8F3A] to-[#2F8F3A]" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram" gradient="from-[#1F4D2B] to-[#1F4D2B]" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" gradient="from-[#2F8F3A] to-[#1F4D2B]" />
              <SocialIcon Icon={Youtube} href="https://youtube.com" label="YouTube" gradient="from-[#2F8F3A] to-[#1F4D2B]" />
              <SocialIcon Icon={Github} href="https://github.com" label="GitHub" gradient="from-[#1F4D2B] to-[#1F2937]" />
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-[#1F2937] text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white border border-[#E5ECE2] text-[#1F2937] placeholder-[#6B7280] text-sm focus:outline-none focus:border-[#2F8F3A] transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-[#2F8F3A] hover:bg-[#23722D] text-white text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* 2. Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2F8F3A] flex items-center gap-2">
              <span className="w-8 h-px bg-[#2F8F3A]/50"></span>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1F4D2B] flex items-center gap-2">
              <span className="w-8 h-px bg-[#1F4D2B]/50"></span>
              Company
            </h4>
            <div className="flex flex-col space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/help">Help & Support</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink href="mailto:careers@lessonly.app">Careers</FooterLink>
            </div>
          </div>

          {/* 4. Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1F4D2B] flex items-center gap-2">
              <span className="w-8 h-px bg-[#1F4D2B]/50"></span>
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
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-sm">
            &copy; {new Date().getFullYear()} Lessonly, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[#6B7280] text-sm">
            <span className="flex items-center gap-2 hover:text-[#2F8F3A] transition-colors cursor-pointer">
              <Globe size={14} />
              <span>English</span>
            </span>
            <span className="flex items-center gap-2 hover:text-[#2F8F3A] transition-colors cursor-pointer">
              <MapPin size={14} />
              <span>Worldwide</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
