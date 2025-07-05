import React from "react";

export interface CourseCardProps {
  title: string;
  author: string;
  description?: string;
  image: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
  borderRadius?: string | number;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  author,
  description,
  image,
  buttonText,
  onButtonClick,
  className = "",
  borderRadius = 16,
}) => (
  <div
    className={`bg-[var(--card)] text-[var(--card-foreground)] flex flex-col shadow-[0_2px_16px_0_rgba(0,0,0,0.06)] p-0 ${className}`}
    style={{ borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover"
      style={{ borderTopLeftRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius, borderTopRightRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius }}
    />
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-base font-bold mb-1 leading-tight">{title}</h3>
      <div className="text-sm text-[var(--muted-foreground)] mb-4">{author}</div>
      {description && <p className="text-xs text-[var(--muted-foreground)] mb-4">{description}</p>}
      <button
        className="mt-auto text-[var(--primary)] flex items-center gap-1 text-sm font-medium hover:underline focus:outline-none"
        onClick={onButtonClick}
      >
        {buttonText} <span aria-hidden="true">→</span>
      </button>
    </div>
  </div>
); 