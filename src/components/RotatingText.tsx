"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: any;
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  mainClassName = "",
  staggerFrom = "first",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-100%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        className={splitLevelClassName}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{
          ...transition,
          delay: staggerFrom === "first" ? index * staggerDuration : (text.length - index - 1) * staggerDuration
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          {splitText(texts[currentIndex])}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}