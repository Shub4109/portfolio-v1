"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const TECHNOLOGIES = [
  {
    name: "Azure",
    description: "Cloud Platform",
    color: "from-blue-500 to-blue-700",
    glow: "rgba(59,130,246,0.3)",
    icon: "☁️",
  },
  {
    name: "Databricks",
    description: "Unified Analytics",
    color: "from-red-500 to-orange-600",
    glow: "rgba(239,68,68,0.3)",
    icon: "⚡",
  },
  {
    name: "Kafka",
    description: "Event Streaming",
    color: "from-slate-500 to-slate-700",
    glow: "rgba(100,116,139,0.3)",
    icon: "🔄",
  },
  {
    name: "Spark",
    description: "Big Data Engine",
    color: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.3)",
    icon: "✨",
  },
  {
    name: "Airflow",
    description: "Orchestration",
    color: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    icon: "🌊",
  },
  {
    name: "Python",
    description: "Data & Automation",
    color: "from-yellow-500 to-blue-600",
    glow: "rgba(234,179,8,0.3)",
    icon: "🐍",
  },
  {
    name: "SQL",
    description: "Data Querying",
    color: "from-indigo-500 to-blue-700",
    glow: "rgba(99,102,241,0.3)",
    icon: "🗄️",
  },
  {
    name: "Git",
    description: "Version Control",
    color: "from-orange-600 to-red-700",
    glow: "rgba(234,88,12,0.3)",
    icon: "🔀",
  },
] as const;

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2
            id="tech-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Tools & Technologies
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
            Battle-tested across enterprise-scale data engineering projects.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
          staggerDelay={0.06}
        >
          {TECHNOLOGIES.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: `0 12px 40px ${tech.glow}`,
                }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.05] transition-colors duration-200 cursor-default"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform duration-200`}
                  aria-hidden="true"
                >
                  {tech.icon}
                </div>

                {/* Labels */}
                <div className="text-center">
                  <div className="text-xs font-semibold text-foreground">
                    {tech.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                    {tech.description}
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${tech.glow} 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
