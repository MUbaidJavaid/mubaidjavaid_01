import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollowGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      setMousePosition(prev => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.1,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.1,
      }));
      rafRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(189 100% 50% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(189 100% 50% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Mouse-following radial glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: `radial-gradient(
            circle at center,
            hsl(189 100% 50% / 0.08) 0%,
            hsl(189 100% 50% / 0.04) 25%,
            hsl(159 100% 50% / 0.02) 50%,
            transparent 70%
          )`,
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-electric/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-glow/5 to-transparent" />

      {/* Subtle animated orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-electric/10 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-emerald-glow/10 blur-3xl"
      />
    </div>
  );
}
