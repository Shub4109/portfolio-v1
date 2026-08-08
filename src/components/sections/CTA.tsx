"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Github, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl overflow-hidden p-10 md:p-16 text-center"
          >
            {/* Corner gradients */}
            <div
              className="absolute top-0 left-0 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top border glow */}
            <div
              className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-xs font-medium text-blue-400 mb-6"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                Open to new projects
              </motion.div>

              {/* Headline */}
              <motion.h2
                id="cta-heading"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-2xl mx-auto leading-tight"
              >
                Ready to Build Your Next{" "}
                <span className="text-gradient">Data Platform?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
              >
                Let&apos;s discuss your data engineering challenges and design
                a platform that scales with your business — cloud-native,
                cost-efficient, and built to last.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="mailto:shubham07nagula@gmail.com"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500 shadow-glow-blue hover:shadow-glow-purple transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href="https://github.com/Shub4109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold border border-white/10 bg-white/5 text-foreground hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  View GitHub
                </a>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-xs text-muted-foreground"
              >
                {[
                  "No long-term commitment required",
                  "Flexible engagement models",
                  "Response within 24 hours",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="text-green-400" aria-hidden="true">✓</span>
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
