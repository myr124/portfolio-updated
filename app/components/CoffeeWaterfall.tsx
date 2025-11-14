'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LiquidParticle {
  id: number;
  delay: number;
  duration: number;
  size: number;
  offset: number;
}

export default function CoffeeWaterfall() {
  const [particles, setParticles] = useState<LiquidParticle[]>([]);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    // Generate liquid particles that flow along the stream
    const generateParticles = () => {
      const newParticles: LiquidParticle[] = [];
      const numParticles = 100;

      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: i,
          delay: (i * 0.05) + Math.random() * 0.3,
          duration: 4 + Math.random() * 3,
          size: 4 + Math.random() * 8,
          offset: (Math.random() - 0.5) * 60, // Horizontal offset from center
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-visible">
      {/* Main continuous liquid stream - wider and more prominent */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ width: '120px', top: '43vh', height: '300vh' }}>
        {/* Base stream with gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(139, 69, 19, 0.6) 0%, rgba(101, 67, 33, 0.7) 20%, rgba(92, 64, 51, 0.6) 50%, rgba(80, 50, 20, 0.5) 80%, rgba(70, 40, 15, 0.4) 100%)',
            filter: 'blur(8px)',
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Flowing highlights layer */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(180, 120, 60, 0.4) 0%, rgba(139, 69, 19, 0.3) 30%, transparent 60%)',
            filter: 'blur(6px)',
          }}
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Dark coffee layer for depth */}
        <motion.div
          className="absolute left-[20%] w-[60%] h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(70, 40, 20, 0.5), rgba(50, 30, 15, 0.4))',
            filter: 'blur(4px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      {/* Pouring effect from cup - more visible */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: '43vh',
          width: '80px',
          height: '100px',
        }}
        animate={{
          scaleY: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(139, 69, 19, 0.9), rgba(101, 67, 33, 0.7))',
            borderRadius: '0 0 50% 50%',
            filter: 'blur(4px)',
            boxShadow: '0 10px 30px rgba(139, 69, 19, 0.4)',
          }}
        />
      </motion.div>

      {/* Animated particles/bubbles flowing within the stream */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `calc(50% + ${particle.offset}px)`,
            top: '45vh',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(180, 120, 60, 0.8), rgba(139, 69, 19, 0.4))`,
            boxShadow: '0 0 10px rgba(180, 120, 60, 0.3)',
          }}
          animate={{
            y: ['0vh', '250vh'],
            x: [0, Math.sin(particle.id) * 25, Math.cos(particle.id) * 15, 0],
            opacity: [0, 0.8, 0.8, 0.6, 0],
            scale: [0.3, 1, 1, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Wavy edge effects for organic liquid look */}
      <svg className="absolute left-1/2 -translate-x-1/2" width="140" height="100%" style={{ top: '43vh' }}>
        <defs>
          <filter id="turbulence">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" />
          </filter>
        </defs>
        <motion.rect
          x="10"
          y="0"
          width="120"
          height="100%"
          fill="url(#coffeeGradient)"
          opacity="0.3"
          filter="url(#turbulence)"
        />
        <defs>
          <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 69, 19, 0.5)" />
            <stop offset="50%" stopColor="rgba(101, 67, 33, 0.6)" />
            <stop offset="100%" stopColor="rgba(80, 50, 20, 0.4)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
