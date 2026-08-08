"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const FOOTER_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Shub4109",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shubhamnagula",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:shubham07nagula@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/[0.07] bg-background"
      role="contentinfo"
    >
      {/* Top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-glow-blue">
                <span className="font-bold text-white text-sm select-none">SN</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Shubham Nagula
                </div>
                <div className="text-[11px] text-muted-foreground">
                  Senior Data Engineer
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
              Building enterprise data platforms that scale — Azure, Databricks,
              Spark, Kafka, and AI automation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group w-fit"
                    aria-label={
                      href.startsWith("http") ? `${label} (opens in new tab)` : label
                    }
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{label}</span>
                    {href.startsWith("http") && (
                      <ArrowUpRight
                        className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Shubham Nagula. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
