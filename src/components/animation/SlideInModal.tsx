import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SlideInModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const SlideInModal: React.FC<SlideInModalProps> = ({ open, onClose, children, className = "" }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      >
        <div className={`bg-[var(--card)] text-[var(--card-foreground)] rounded shadow-lg p-6 relative ${className}`}>
          <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-[var(--muted-foreground)] hover:text-[var(--primary)]">&times;</button>
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
); 