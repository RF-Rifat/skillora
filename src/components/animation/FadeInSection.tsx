import React from "react";
import { motion } from "framer-motion";

export interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
); 