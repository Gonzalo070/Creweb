"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Zap } from "lucide-react";
import SpotlightTiltCard from "./SpotlightTiltCard";

/**
 * Composición de 3 tarjetas que simulan vistas previas de proyectos reales
 * (una tienda, una métrica de conversión y un indicador de performance).
 * Cada motion.div externo mantiene la flotación idle (loop de translateY)
 * y la rotación estática de composición; SpotlightTiltCard se encarga del
 * tilt 3D + spotlight al pasar el mouse, en una capa aparte para que ambas
 * animaciones convivan sin pisarse.
 */
export default function FloatingCards() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md md:h-[480px]">
      {/* Glow ambiental detrás de la composición */}
      <div className="absolute inset-0 -z-10 bg-glow-violet blur-2xl" />

      {/* Tarjeta principal: preview de e-commerce */}
      <motion.div
        style={{ ["--tilt" as any]: "-4deg" }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong absolute left-2 top-6 w-64 -rotate-[4deg] rounded-3xl p-4 shadow-glow-violet"
      >
        <SpotlightTiltCard maxTilt={12} spotlightColor="rgba(138, 43, 226, 0.2)">
          <div className="flex items-center justify-between">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neon-violet/15">
              <ShoppingCart className="h-4 w-4 text-neon-violet" />
            </span>
            <span className="rounded-full bg-neon-emerald/10 px-2 py-0.5 text-[11px] text-neon-emerald">
              +48% ventas
            </span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-white/10" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-white/5" />
            ))}
          </div>
        </SpotlightTiltCard>
      </motion.div>

      {/* Tarjeta secundaria: métrica de conversión */}
      <motion.div
        style={{ ["--tilt" as any]: "6deg" }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="glass-strong absolute right-0 top-0 w-52 rotate-[6deg] rounded-3xl p-4 shadow-glow-cyan"
      >
        <SpotlightTiltCard maxTilt={12} spotlightColor="rgba(0, 240, 255, 0.2)">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neon-cyan/15">
              <TrendingUp className="h-4 w-4 text-neon-cyan" />
            </span>
            <p className="text-xs text-ink-muted">Tasa de conversión</p>
          </div>
          <p className="mt-3 font-display text-3xl font-semibold text-ink">
            6.8<span className="text-neon-cyan">%</span>
          </p>
          <p className="mt-1 text-[11px] text-ink-faint">vs. 2.1% promedio de industria</p>
        </SpotlightTiltCard>
      </motion.div>

      {/* Tarjeta terciaria: performance / velocidad */}
      <motion.div
        style={{ ["--tilt" as any]: "-2deg" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        className="glass-strong absolute bottom-2 left-10 w-48 -rotate-[2deg] rounded-3xl p-4 shadow-glow-emerald"
      >
        <SpotlightTiltCard maxTilt={12} spotlightColor="rgba(0, 255, 135, 0.2)">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neon-emerald/15">
              <Zap className="h-4 w-4 text-neon-emerald" />
            </span>
            <p className="text-xs text-ink-muted">Velocidad de carga</p>
          </div>
          <p className="mt-3 font-display text-3xl font-semibold text-ink">0.9s</p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[96%] rounded-full bg-neon-emerald" />
          </div>
        </SpotlightTiltCard>
      </motion.div>
    </div>
  );
}