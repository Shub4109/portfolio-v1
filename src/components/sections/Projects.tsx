"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, GitBranch, Zap, Database } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const PROJECTS = [
  {
    id: "etl-framework",
    title: "Enterprise ETL Framework",
    description:
      "A scalable, config-driven ETL framework built on Apache Spark and Azure Data Factory, processing 5TB+ of daily data with automated error handling, lineage tracking, and SLA monitoring.",
    tags: ["Apache Spark", "Azure ADF", "Python", "Delta Lake", "Airflow"],
    icon: Database,
    gradient: "from-blue-500/10 to-cyan-500/5",
    accentColor: "text-blue-400",
    borderColor: "group-hover:border-blue-500/30",
    glowColor: "rgba(59,130,246,0.08)",
    stat: { value: "5TB+", label: "Daily Throughput" },
    href: "#projects",
  },
  {
    id: "kafka-streaming",
    title: "Kafka Streaming Platform",
    description:
      "Real-time event streaming infrastructure handling 50M+ events per day across microservices. Built with Kafka Streams, schema registry, and a custom monitoring dashboard for sub-30ms latency.",
    tags: ["Apache Kafka", "Kafka Streams", "Python", "Confluent", "Grafana"],
    icon: Zap,
    gradient: "from-orange-500/10 to-red-500/5",
    accentColor: "text-orange-400",
    borderColor: "group-hover:border-orange-500/30",
    glowColor: "rgba(249,115,22,0.08)",
    stat: { value: "50M+", label: "Events / Day" },
    href: "#projects",
  },
  {
    id: "azure-platform",
    title: "Azure Modern Data Platform",
    description:
      "End-to-end cloud-native data lakehouse on Azure — ingesting from 30+ sources into a medallion architecture (Bronze/Silver/Gold) with Databricks, dbt, and Power BI for self-serve analytics.",
    tags: ["Azure Databricks", "dbt", "ADLS Gen2", "Power BI", "Terraform"],
    icon: GitBranch,
    gradient: "from-purple-500/10 to-violet-500/5",
    accentColor: "text-purple-400",
    borderColor: "group-hover:border-purple-500/30",
    glowColor: "rgba(139,92,246,0.08)",
    stat: { value: "30+", label: "Data Sources" },
    href: "#projects",
  },
] as const;

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Featured Work
            </p>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground"
            >
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            View all projects
            <ArrowUpRight
              className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.12}
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.id}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative flex flex-col h-full rounded-2xl border border-white/[0.07] ${project.borderColor} bg-gradient-to-br ${project.gradient} bg-surface/30 backdrop-blur-sm overflow-hidden transition-all duration-300 shadow-card hover:shadow-card-hover`}
                  aria-label={project.title}
                >
                  {/* Image placeholder */}
                  <div
                    className="relative h-44 bg-gradient-to-br from-slate-800/60 to-slate-900/80 flex items-center justify-center overflow-hidden"
                    aria-hidden="true"
                  >
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    {/* Glow behind icon */}
                    <div
                      className="absolute w-32 h-32 rounded-full blur-2xl"
                      style={{ background: project.glowColor }}
                    />
                    <Icon
                      className={`relative w-12 h-12 ${project.accentColor} opacity-60`}
                      aria-hidden="true"
                    />
                    {/* Stat badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                      <span className={`text-sm font-bold ${project.accentColor}`}>
                        {project.stat.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground ml-1">
                        {project.stat.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-muted-foreground border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={project.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${project.accentColor} hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded-lg`}
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
