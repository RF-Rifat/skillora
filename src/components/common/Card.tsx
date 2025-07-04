import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-[var(--card)] text-[var(--card-foreground)] rounded shadow p-4 ${className}`}>
    {children}
  </div>
); 