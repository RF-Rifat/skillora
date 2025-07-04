import React from "react";

export interface ProfileMenuProps {
  name: string;
  avatar: string;
  menu?: React.ReactNode;
  className?: string;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ name, avatar, menu, className = "" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover border-2 border-[var(--primary)]" />
    <span className="font-medium text-[var(--foreground)]">{name}</span>
    {menu}
  </div>
); 