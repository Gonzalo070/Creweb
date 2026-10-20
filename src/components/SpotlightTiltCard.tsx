"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type SpotlightTiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Grados máximos de inclinación en cada eje. 0 desactiva el tilt (deja solo el spotlight). */
  maxTilt?: number;
  /** Color del resplandor que sigue al cursor, en formato rgba(). */
  spotlightColor?: string;
  /** Radio del resplandor en px. */
  spotlightSize?: number;
};

/**
 * Wrapper de micro-interacción: sigue la posición del mouse dentro de la
 * tarjeta para (1) mover un resplandor radial tipo "spotlight" y (2)
 * inclinar la tarjeta en 3D (perspective + rotateX/rotateY), con el
 * contenido levemente adelantado en el eje Z para dar sensación de
 * profundidad real. Usa MotionValues + spring en vez de setState para que
 * el movimiento del mouse no dispare renders de React en cada frame.
 */
export default function SpotlightTiltCard({
  children,
  className = "",
  maxTilt = 10,
  spotlightColor = "rgba(105, 230, 199, 0.14)",
  spotlightSize = 320,
}: SpotlightTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Posición del mouse relativa a la tarjeta, normalizada de 0 a 1.
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);

  const spotlightX = useTransform(springX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(springY, (v) => `${v * 100}%`);
  const spotlightBackground = useTransform([spotlightX, spotlightY], ([x, y]) =>
    `radial-gradient(${spotlightSize}px circle at ${x} ${y}, ${spotlightColor}, transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
      className="h-full w-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative h-full w-full ${className}`}
      >
        {/* Resplandor que sigue al cursor */}
        <motion.div
          aria-hidden="true"
          style={{ background: spotlightBackground }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Contenido levemente adelantado en Z para reforzar la profundidad */}
        <div style={{ transform: "translateZ(28px)" }} className="relative h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
