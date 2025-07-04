import React from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children, className = "" }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className={`bg-[var(--card)] text-[var(--card-foreground)] rounded shadow-lg p-6 relative ${className}`}>
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-[var(--muted-foreground)] hover:text-[var(--primary)]">&times;</button>
        {children}
      </div>
    </div>
  );
}; 