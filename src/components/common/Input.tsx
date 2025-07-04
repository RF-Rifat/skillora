import React from "react";

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  type = "text",
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`px-3 py-2 rounded border border-[var(--input)] bg-[var(--surface)] text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] focus:outline-none ${className}`}
  />
); 