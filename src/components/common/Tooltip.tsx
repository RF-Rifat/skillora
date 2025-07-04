import React from "react";

export interface TooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text, className = "" }) => (
  <span className="relative group">
    {children}
    <span className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-[var(--foreground)] text-[var(--background)] text-xs rounded px-2 py-1 whitespace-nowrap z-10 ${className}`}>{text}</span>
  </span>
); 