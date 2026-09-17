"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Sello de marca fijo en la esquina superior izquierda, desacoplado del
 * Navbar. Vive en su propia capa (z-50) para no competir con el dock
 * central ni con el menú móvil.
 */
export default function BrandBadge() {
  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass fixed top-6 left-8 z-50 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-glow-cyan/40 transition-transform hover:scale-[1.03]"
    >
      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-neon-cyan/10">
        <Sparkles className="h-3.5 w-3.5 text-neon-cyan" strokeWidth={2.5} />
        <span className="absolute inset-0 rounded-full bg-neon-cyan/30 blur-md" />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
        Cre<span className="text-neon-cyan">web</span>
      </span>
    </motion.a>
  );
}