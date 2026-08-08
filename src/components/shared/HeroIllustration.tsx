"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[460px]">
        {/* Main pipeline card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Central dashboard card */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl p-5 shadow-2xl">
            {/* Card header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <span className="text-[10px] font-mono text-blue-400/80 tracking-widest uppercase">
                Pipeline Monitor
              </span>
            </div>

            {/* Pipeline stages */}
            <div className="flex items-center gap-1.5 mb-5">
              {[
                { label: "Ingest", color: "from-blue-500 to-blue-600", icon: "⬇" },
                { label: "Process", color: "from-cyan-500 to-cyan-600", icon: "⚙" },
                { label: "Transform", color: "from-violet-500 to-violet-600", icon: "⟲" },
                { label: "Serve", color: "from-emerald-500 to-emerald-600", icon: "↗" },
              ].map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-1.5 flex-1">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                    className={`flex-1 rounded-lg bg-gradient-to-br ${stage.color} p-2 text-center`}
                  >
                    <div className="text-xs mb-0.5">{stage.icon}</div>
                    <div className="text-[9px] font-semibold text-white/90 leading-none">
                      {stage.label}
                    </div>
                  </motion.div>
                  {i < 3 && (
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                      className="text-blue-400/60 text-xs"
                    >
                      →
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="bg-slate-950/60 rounded-xl p-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400 font-medium">
                  Throughput / sec
                </span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[10px] text-green-400 font-mono"
                >
                  ● LIVE
                </motion.span>
              </div>
              {/* Bar chart */}
              <div className="flex items-end gap-1 h-10">
                {[35, 60, 45, 75, 55, 80, 65, 90, 70, 95, 72, 88].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex-1 rounded-sm"
                      style={{
                        background: `linear-gradient(to top, rgba(59,130,246,0.8), rgba(139,92,246,0.6))`,
                      }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Records", value: "2.4M", trend: "+12%" },
                { label: "Latency", value: "18ms", trend: "-3ms" },
                { label: "Uptime", value: "99.9%", trend: "SLA" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="bg-slate-950/50 rounded-lg p-2 text-center"
                >
                  <div className="text-[11px] font-bold text-white/90">
                    {metric.value}
                  </div>
                  <div className="text-[9px] text-slate-500 leading-none mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[9px] text-green-400 mt-0.5">
                    {metric.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating cloud card — top right */}
        <motion.div
          animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-4 rounded-xl border border-blue-500/20 bg-slate-900/90 backdrop-blur-xl p-3 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs">
              ☁
            </div>
            <span className="text-[11px] font-semibold text-white/80">Azure</span>
          </div>
          <div className="text-[10px] text-slate-400">Data Factory</div>
          <div className="mt-1.5 flex gap-1">
            <div className="h-1 flex-1 rounded-full bg-blue-500/60" />
            <div className="h-1 flex-[2] rounded-full bg-blue-500/30" />
          </div>
        </motion.div>

        {/* Floating DB card — bottom left */}
        <motion.div
          animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
          transition={{ duration: 7, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-6 rounded-xl border border-purple-500/20 bg-slate-900/90 backdrop-blur-xl p-3 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xs">
              🗄
            </div>
            <span className="text-[11px] font-semibold text-white/80">Delta Lake</span>
          </div>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                className="h-4 w-4 rounded border border-purple-500/40 bg-purple-500/10"
              />
            ))}
          </div>
        </motion.div>

        {/* Floating spark card — top left */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 -left-8 rounded-xl border border-orange-500/20 bg-slate-900/90 backdrop-blur-xl p-2.5 shadow-xl"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-[10px]">
              ⚡
            </div>
            <div>
              <div className="text-[10px] font-semibold text-white/80">Spark</div>
              <div className="text-[9px] text-orange-400/70">3.5.1</div>
            </div>
          </div>
        </motion.div>

        {/* Connection lines SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          viewBox="0 0 460 480"
          fill="none"
        >
          <motion.path
            d="M 380 80 Q 420 200 380 340"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 60 140 Q 20 240 80 380"
            stroke="url(#lineGrad2)"
            strokeWidth="1"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
