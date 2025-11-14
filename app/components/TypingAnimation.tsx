'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
    text: string;
    className?: string;
}

export default function TypingAnimation({ text, className }: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50); // Adjust speed here (lower = faster)

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <motion.h1
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
            />
        </motion.h1>
    );
}
