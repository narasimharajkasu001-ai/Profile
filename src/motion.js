/**
 * Shared framer-motion presets. Each animation runs once, when its
 * element first scrolls into view. MotionConfig in App.jsx turns all of
 * them off for visitors who prefer reduced motion.
 */

export const inView = { once: true, amount: 0.2 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
