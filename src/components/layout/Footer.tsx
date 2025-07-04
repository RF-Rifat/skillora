import React from "react";

export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ children, className = "" }) => (
  <footer className={`w-full py-4 px-6 bg-[var(--surface)] border-t border-[var(--border)] text-center text-sm text-[var(--muted-foreground)] ${className}`}>
    {children || "© 2024 Your Company. All rights reserved."}
  </footer>
); 