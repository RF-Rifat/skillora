import React from "react";

export interface LessonListProps {
  lessons: Array<{ id: string; title: string; completed?: boolean }>;
  onSelect?: (id: string) => void;
  className?: string;
}

export const LessonList: React.FC<LessonListProps> = ({ lessons, onSelect, className = "" }) => (
  <ul className={`divide-y divide-[var(--border)] ${className}`}>
    {lessons.map((lesson) => (
      <li
        key={lesson.id}
        className={`py-2 px-2 flex items-center cursor-pointer hover:bg-[var(--muted)] ${lesson.completed ? "text-[var(--success)]" : ""}`}
        onClick={() => onSelect?.(lesson.id)}
      >
        <span className="flex-1">{lesson.title}</span>
        {lesson.completed && <span className="ml-2 text-xs">✓</span>}
      </li>
    ))}
  </ul>
); 