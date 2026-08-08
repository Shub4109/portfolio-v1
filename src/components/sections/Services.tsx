"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Cloud, BrainCircuit, ArrowRight, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const SERVICES = [
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    description:
      "Design and build robust data pipelines, ETL frameworks, and data warehouse solutions that power business-critical analytics at scale.",
    features: [
      "Pipeline design & implementation",
      "ETL / ELT framework architecture",
      "Data quality & observability",
      "Performance optimization",
    ],
    gradient: "from-blue-500/10 via-transparent to-transparent",
    iconGradient: "from-blue-500 to-cyan-600",
    accentColor: "text-blue-400",
    borderHover: "hover:border-blue-500/30",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    id: "cloud-platform",
    icon: Cloud,
    title: "Cloud Data Platform",
    description:
      "Architect and migrate to modern cloud-native data lakehouse platforms on Azure and Databricks — scalable, cost-efficient, and future-ready.",
    features: [
      "Medallion architecture design",
      "Azure / Databricks platform setup",
      "Data governance & security",
      "Cost optimization strategy",
    ],
    gradient: "from-purple-500/10 via-transparent to-transparent",
    iconGradient: "from-purple-500 to-violet-600",
    accentColor: "text-purple-400",
    borderHover: "hover:border-purple-500/30",
    glowColor: "rgba(139,92,246,0.12)",
    featured: true,
  },
  {
    id: "ai-automation",
    icon: BrainCircuit,
    title: "AI Automation",
    description:
      "Integrate AI and machine learning into your data workflows — automated anomaly detection, intelligent orchestration, and predictive data quality.",
    features: [
      "ML pipeline integration",
      "Automated anomaly detection",
      "LLM-powered data cataloguing",
      "Predictive data quality",
    ],
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    iconGradient: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/30",
    glowColor: "rgba(16,185,129,0.12)",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            What I Do
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Consulting Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            End-to-end data engineering expertise — from architecture design to
            production deployment.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          staggerDelay={0.12}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative flex flex-col h-full rounded-2xl border border-white/[0.07] ${service.borderHover} bg-gradient-to-b ${service.gradient} backdrop-blur-sm p-6 overflow-hidden transition-all duration-300`}
                  aria-label={service.title}
                >
                  {/* Hover glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${service.glowColor} 0%, transparent 60%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Featured badge */}
                  {"featured" in service && service.featured && (
                    <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-semibold text-purple-400">
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-200`}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title + description */}
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2 mb-5" role="list">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${service.accentColor}`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/services"
                    className={`relative inline-flex items-center gap-1.5 text-sm font-medium ${service.accentColor} hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded-lg`}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
