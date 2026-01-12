import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
export function ConstraintVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-full flex items-center justify-center p-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-purple/5 blur-[100px] rounded-full" />
      <svg viewBox="0 0 400 400" className="w-full max-w-[400px] drop-shadow-2xl">
        {/* Left Side: Constraints (Tangled) */}
        <motion.path
          d="M 50 150 Q 80 180 50 210 T 50 270"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 30 180 Q 60 210 30 240 T 30 300"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        {/* The Transformation Node (Lightbulb) */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <circle cx="200" cy="200" r="50" fill="hsl(var(--card))" stroke="hsl(var(--brand-purple))" strokeWidth="2" />
          <foreignObject x="175" y="175" width="50" height="50">
            <div className="flex items-center justify-center w-full h-full">
              <Lightbulb className="w-8 h-8 text-brand-purple animate-pulse" />
            </div>
          </foreignObject>
        </motion.g>
        {/* Right Side: Leverage (Efficient/Aligned) */}
        <motion.line
          x1="250" y1="180" x2="350" y2="180"
          stroke="hsl(var(--brand-accent))"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line
          x1="250" y1="200" x2="350" y2="200"
          stroke="hsl(var(--brand-accent))"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.2 }}
        />
        <motion.line
          x1="250" y1="220" x2="350" y2="220"
          stroke="hsl(var(--brand-accent))"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.4 }}
        />
        {/* Flowing Particles */}
        <motion.circle
          r="4"
          fill="hsl(var(--brand-purple))"
          animate={{
            cx: [100, 200, 350],
            cy: [150, 200, 180],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="3"
          fill="hsl(var(--brand-accent))"
          animate={{
            cx: [100, 200, 350],
            cy: [250, 200, 220],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </div>
  );
}