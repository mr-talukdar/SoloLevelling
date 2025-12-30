
import React from 'react';
import { Quest } from '../types';
import { SystemBox, RankBadge } from './SystemUI';
import { CheckCircle2, AlertCircle, Skull, Sword, ScrollText } from 'lucide-react';

interface QuestLogProps {
  quests: Quest[];
  onComplete: (id: string) => void;
}

export const QuestLog: React.FC<QuestLogProps> = ({ quests, onComplete }) => {
  // Sort quests: Core -> Side -> Boss
  const sortedQuests = [...quests].sort((a, b) => {
    const order = { 'CORE': 1, 'SIDE': 2, 'BOSS': 3 };
    return order[a.type] - order[b.type];
  });

  const getVariant = (type: string) => {
    switch (type) {
      case 'BOSS': return 'crimson';
      case 'SIDE': return 'purple';
      default: return 'blue';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'BOSS': return <Skull size={14} className="text-system-crimson" />;
      case 'SIDE': return <ScrollText size={14} className="text-system-purple" />;
      default: return <Sword size={14} className="text-system-blue" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'BOSS': return 'BOSS QUEST';
      case 'SIDE': return 'SIDE QUEST';
      default: return 'DAILY QUEST';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-system-blue font-mono text-sm tracking-widest border-b border-system-blue/30 pb-1 w-full">
          QUEST LOG
        </h2>
      </div>

      {sortedQuests.map((quest) => (
        <SystemBox 
          key={quest.id} 
          variant={getVariant(quest.type)}
          className={`
            ${quest.completed ? 'opacity-50 grayscale' : 'opacity-100'} 
            transition-all duration-300 hover:scale-[1.02]
          `}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`
                  flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider
                  ${quest.type === 'BOSS' ? 'bg-red-950 text-red-200 border border-red-800' : 
                    quest.type === 'SIDE' ? 'bg-purple-950 text-purple-200 border border-purple-800' : 
                    'bg-blue-950 text-blue-200 border border-blue-800'}
                `}>
                  {getIcon(quest.type)}
                  {getLabel(quest.type)}
                </span>
                <RankBadge rank={quest.difficulty} />
              </div>
              <h3 className={`font-bold text-sm ${quest.type === 'BOSS' ? 'text-red-100 text-glow-crimson' : 'text-white'}`}>
                {quest.title}
              </h3>
            </div>
            {!quest.completed && (
              <button 
                onClick={(e) => { e.stopPropagation(); onComplete(quest.id); }}
                className={`
                  p-1 rounded transition-colors group relative
                  ${quest.type === 'BOSS' ? 'text-system-crimson hover:bg-system-crimson/20' : 'text-system-blue hover:bg-system-blue/20'}
                `}
                title="Complete Quest"
              >
                <div className="w-5 h-5 border border-current rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            )}
            {quest.completed && <CheckCircle2 className="w-5 h-5 text-green-500" />}
          </div>
          
          <p className="text-xs text-slate-400 mb-3 font-mono leading-relaxed">
            {quest.description}
          </p>
          
          <div className="border-t border-slate-700/50 pt-2 flex flex-col gap-1">
             <div className="text-[10px] text-slate-500 font-mono">REWARDS:</div>
             <div className="flex flex-wrap gap-2">
               {quest.rewards.map((r, i) => (
                 <span key={i} className="text-[10px] text-slate-300 bg-slate-800 px-1 rounded border border-slate-700">{r}</span>
               ))}
             </div>
             
             {quest.penalty && !quest.completed && (
                <div className={`mt-1 flex items-center gap-1 text-[10px] ${quest.type === 'BOSS' ? 'text-red-400' : 'text-slate-500'}`}>
                  <AlertCircle size={10} />
                  <span>Penalty: {quest.penalty}</span>
                </div>
             )}
          </div>
        </SystemBox>
      ))}
    </div>
  );
};
