import React from "react";

export interface NavbarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ left, right, className = "" }) => (
  <nav className={`w-full flex items-center justify-between px-6 py-3 bg-[var(--surface)] border-b border-[var(--border)] ${className}`}>
    <div>{left}</div>
    <div>{right}</div>
  </nav>
); 