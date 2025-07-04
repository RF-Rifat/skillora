import React from "react";

export interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className = "" }) => (
  <aside className={`w-64 min-h-screen bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border-r border-[var(--sidebar-border)] p-4 ${className}`}>
    {children}
  </aside>
); 