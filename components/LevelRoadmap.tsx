import React from 'react';
import { LevelData } from '../types';
import { SystemBox, RankBadge } from './SystemUI';
import { Lock, Unlock, ChevronRight } from 'lucide-react';

interface LevelRoadmapProps {
  levels: LevelData[];
  currentLevelId: number;
}

export const LevelRoadmap: React.FC<LevelRoadmapProps> = ({ levels, currentLevelId }) => {
  return (
    <div className="relative pl-8 border-l border-slate-800 space-y-8">
      {levels.map((level, index) => {
        const isActive = level.id === currentLevelId;
        const isPast = level.id < currentLevelId;
        const isLocked = level.id > currentLevelId;

        return (
          <div key={level.id} className={`relative transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100 opacity-80'}`}>
            {/* Timeline Dot */}
            <div 
              className={`absolute -left-[39px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-slate-950 z-10
                ${isActive ? 'border-system-blue shadow-[0_0_10px_#00f0ff]' : 
                  isPast ? 'border-slate-500 bg-slate-800' : 'border-slate-700'}
              `}
            >
              {isPast ? <div className="w-2 h-2 bg-slate-500 rounded-full" /> : 
               isActive ? <div className="w-2 h-2 bg-system-blue rounded-full animate-pulse" /> : 
               <Lock size={10} className="text-slate-700" />}
            </div>

            <SystemBox 
              variant={isActive ? 'blue' : isLocked ? 'blue' : 'blue'}
              className={`${isLocked ? 'grayscale opacity-50' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Header Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[10px] text-slate-500 font-mono mb-1">
                        LEVEL {level.id}
                        {isActive && <span className="ml-2 text-system-blue animate-pulse">● CURRENT</span>}
                      </h4>
                      <h3 className={`text-lg font-bold ${isActive ? 'text-white text-glow' : 'text-slate-300'}`}>
                        {level.title}
                      </h3>
                    </div>
                    <RankBadge rank={level.rank} />
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-slate-950/50 border border-slate-800 rounded">
                      <div className="text-slate-500 text-[10px]">PRIMARY FOCUS</div>
                      <div className="text-cyan-300">{level.primaryFocus}</div>
                    </div>
                    <div className="p-2 bg-slate-950/50 border border-slate-800 rounded">
                      <div className="text-slate-500 text-[10px]">SECONDARY FOCUS</div>
                      <div className="text-purple-300">{level.secondaryFocus}</div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-slate-400 italic mb-2">"{level.description}"</p>
                    <div className="flex flex-wrap gap-2">
                       {level.abilities.map((ability, idx) => (
                         <span key={idx} className="flex items-center gap-1 text-[10px] text-slate-300 border border-slate-700 px-2 py-0.5 rounded-full bg-slate-900">
                           <Unlock size={8} /> {ability}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </SystemBox>
          </div>
        );
      })}
    </div>
  );
};