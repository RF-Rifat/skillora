import React from "react";

export interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: "info" | "success" | "warning" | "error";
}

export const Alert: React.FC<AlertProps> = ({ children, className = "", type = "info" }) => {
  const types: Record<string, string> = {
    info: "bg-[var(--info)] text-white",
    success: "bg-[var(--success)] text-white",
    warning: "bg-[var(--warning)] text-white",
    error: "bg-[var(--error)] text-white",
  };
  return (
    <div className={`px-4 py-2 rounded ${types[type]} ${className}`}>{children}</div>
  );
}; 