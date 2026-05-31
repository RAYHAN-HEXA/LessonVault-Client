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
        className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-1 inline-block"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-1 inline-block"
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
    className={`w-10 h-10 flex items-center justify-center rounded-xl text-white bg-gradient-to-br ${gradient} opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-${gradient.split('-')[1]}-500/20`}
  >
    <SocialIconComponent size={18} />
  </a>
);

const Footer = () => {
  const { COLORS } = useTheme();

  return (
    <footer
      className="w-full text-white font-sans pt-16 pb-8 border-t border-white/10 relative overflow-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-white/10 pb-12">
          {/* 1. Brand Identity */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-8">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                LessonVault
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
              Preserve and share your life's greatest lessons with a global community of learners and educators.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" gradient="from-sky-500 to-blue-500" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram" gradient="from-pink-500 to-rose-500" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" gradient="from-blue-500 to-indigo-500" />
              <SocialIcon Icon={Youtube} href="https://youtube.com" label="YouTube" gradient="from-red-500 to-rose-500" />
              <SocialIcon Icon={Github} href="https://github.com" label="GitHub" gradient="from-slate-600 to-slate-700" />
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* 2. Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-400 flex items-center gap-2">
              <span className="w-8 h-px bg-violet-500/50"></span>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-500/50"></span>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-fuchsia-400 flex items-center gap-2">
              <span className="w-8 h-px bg-fuchsia-500/50"></span>
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
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} LessonVault, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Globe size={14} />
              <span>English</span>
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
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
