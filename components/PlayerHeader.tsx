import React from 'react';
import { Zap, Shield, Brain } from 'lucide-react';

interface PlayerHeaderProps {
  level: number;
  xp: number;
  maxXp: number;
  title: string;
}

export const PlayerHeader: React.FC<PlayerHeaderProps> = ({ level, xp, maxXp, title }) => {
  const progress = (xp / maxXp) * 100;

  return (
    <div className="w-full bg-slate-950 border-b border-slate-800 p-4 sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Identity */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-12 h-12 rounded bg-slate-900 border border-system-blue flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
             <span className="text-xl font-bold text-white">{level}</span>
          </div>
          <div>
            <h1 className="text-sm text-slate-400 font-mono tracking-widest uppercase">Player Name</h1>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              RAHUL TALUKDAR 
              <span className="text-xs px-2 py-0.5 rounded bg-system-purple/20 text-system-purple border border-system-purple/50">
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* HUD Stats */}
        <div className="flex gap-6 text-xs font-mono text-slate-400 hidden md:flex">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-yellow-400" /> STAMINA: 100%
          </div>
          <div className="flex items-center gap-2">
            <Brain size={14} className="text-blue-400" /> MANA: 85%
          </div>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-red-400" /> HEALTH: OK
          </div>
        </div>

        {/* XP Bar */}
        <div className="w-full md:w-1/3">
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
            <span>EXP</span>
            <span>{xp} / {maxXp}</span>
          </div>
          <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800 relative">
            <div 
              className="h-full bg-gradient-to-r from-blue-900 to-system-blue transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Glow effect on the bar tip */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white blur-[2px]"
              style={{ left: `${progress}%`, transition: 'left 1s ease-out' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};