import React from 'react';

export const SystemBox: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'purple' | 'crimson';
  onClick?: () => void;
}> = ({ children, className = '', variant = 'blue', onClick }) => {
  const borderColors = {
    blue: 'border-system-blue/30 shadow-system-blue/10',
    purple: 'border-system-purple/30 shadow-system-purple/10',
    crimson: 'border-system-crimson/30 shadow-system-crimson/10',
  };

  const bgColors = {
    blue: 'bg-slate-900/80',
    purple: 'bg-slate-900/80',
    crimson: 'bg-red-950/30',
  };

  return (
    <div 
      onClick={onClick}
      className={`
        relative backdrop-blur-md border ${borderColors[variant]} 
        shadow-[0_0_15px_rgba(0,0,0,0.3)] ${bgColors[variant]} 
        rounded-sm p-4 ${className} 
        ${onClick ? 'cursor-pointer hover:bg-slate-800 transition-colors' : ''}
      `}
    >
      {/* Corner decorations */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${variant === 'crimson' ? 'border-system-crimson' : variant === 'purple' ? 'border-system-purple' : 'border-system-blue'}`} />
      <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${variant === 'crimson' ? 'border-system-crimson' : variant === 'purple' ? 'border-system-purple' : 'border-system-blue'}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${variant === 'crimson' ? 'border-system-crimson' : variant === 'purple' ? 'border-system-purple' : 'border-system-blue'}`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${variant === 'crimson' ? 'border-system-crimson' : variant === 'purple' ? 'border-system-purple' : 'border-system-blue'}`} />
      
      {children}
    </div>
  );
};

export const SystemBadge: React.FC<{ label: string; color?: string }> = ({ label, color = 'bg-system-blue' }) => (
  <span className={`inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-black ${color} rounded-sm`}>
    {label}
  </span>
);

export const RankBadge: React.FC<{ rank: string }> = ({ rank }) => {
  let color = 'text-white';
  let shadow = '';
  
  if (rank === 'S' || rank === 'NATIONAL') {
    color = 'text-yellow-400';
    shadow = 'text-shadow: 0 0 10px rgba(250, 204, 21, 0.5)';
  } else if (rank === 'A' || rank === 'MONARCH') {
    color = 'text-system-purple';
    shadow = 'text-shadow: 0 0 10px rgba(189, 0, 255, 0.5)';
  } else if (rank === 'B') {
    color = 'text-system-blue';
  } else if (rank === 'C') {
    color = 'text-green-400';
  }

  return (
    <span className={`font-mono font-bold text-xl ${color}`} style={{ textShadow: shadow ? shadow : undefined }}>
      {rank}
    </span>
  );
}