import React from "react";
import { motion } from "framer-motion";

export interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = "", onClick }) => (
  <motion.button
    whileTap={{ scale: 0.96 }}
    whileHover={{ scale: 1.04 }}
    className={`px-4 py-2 rounded font-semibold bg-[var(--primary)] text-[var(--primary-foreground)] transition focus:outline-none ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.button>
); 