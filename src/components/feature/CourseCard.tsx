import React from "react";

export interface CourseCardProps {
  title: string;
  description: string;
  image?: string;
  footer?: React.ReactNode;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, footer, className = "" }) => (
  <div className={`bg-[var(--card)] text-[var(--card-foreground)] rounded shadow p-4 flex flex-col ${className}`}>
    {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-[var(--muted-foreground)] mb-4">{description}</p>
    {footer && <div className="mt-auto">{footer}</div>}
  </div>
); 