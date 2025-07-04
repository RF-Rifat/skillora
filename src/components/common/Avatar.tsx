import React from "react";

export interface AvatarProps {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", className = "", size = 40 }) => (
  <img
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={`rounded-full object-cover border-2 border-[var(--primary)] ${className}`}
    style={{ width: size, height: size }}
  />
); 