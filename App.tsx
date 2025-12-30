
import React, { useState, useEffect, useCallback } from 'react';
import { PlayerHeader } from './components/PlayerHeader';
import { StatsPanel } from './components/StatsPanel';
import { QuestLog } from './components/QuestLog';
import { LevelRoadmap } from './components/LevelRoadmap';
import { SystemBox } from './components/SystemUI';
import { LEVEL_ROADMAP, MONTHLY_QUESTS, INITIAL_STATS } from './constants';
import { PlayerStats, Quest } from './types';
import { Terminal, Activity, Trophy, Flame, Database } from 'lucide-react';
import { loadProgress, saveProgress, GameState } from './db';

const App: React.FC = () => {
  const [currentLevelId, setCurrentLevelId] = useState(1);
  const [xp, setXp] = useState(0);
  const [maxXp, setMaxXp] = useState(500);
  const [stats, setStats] = useState<PlayerStats>(INITIAL_STATS);
  const [quests, setQuests] = useState<Quest[]>(MONTHLY_QUESTS[1]);
  const [showSystemMsg, setShowSystemMsg] = useState(true);
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Initial Load
  useEffect(() => {
    const init = async () => {
      const savedState = await loadProgress();
      if (savedState) {
        setCurrentLevelId(savedState.currentLevelId);
        setXp(savedState.xp);
        setStats(savedState.stats);
        setQuests(savedState.quests);
        setStreak(savedState.streak);
        setMaxXp(500 * savedState.currentLevelId);
      }
      setIsLoading(false);
      
      const timer = setTimeout(() => setShowSystemMsg(false), 3000);
      return () => clearTimeout(timer);
    };
    init();
  }, []);

  // Update Quests when level changes (only if not loading from save)
  useEffect(() => {
    if (!isLoading) {
      // If the current quests don't match the level (and we aren't just loading saved quests)
      // This logic prevents overwriting saved quest progress with fresh quests on load
      const isLevelMismatch = quests.length > 0 && !quests[0].id.startsWith(`${currentLevelId}-`);
      if (isLevelMismatch && MONTHLY_QUESTS[currentLevelId]) {
        setQuests(MONTHLY_QUESTS[currentLevelId]);
        setMaxXp(500 * currentLevelId);
      }
    }
  }, [currentLevelId, isLoading]);

  // Save on significant state changes
  useEffect(() => {
    if (!isLoading) {
      const state: GameState = {
        currentLevelId,
        xp,
        stats,
        quests,
        streak,
        lastPlayed: new Date().toISOString()
      };
      
      // Debounce save slightly
      const timeoutId = setTimeout(() => {
        saveProgress(state);
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [currentLevelId, xp, stats, quests, streak, isLoading]);

  const handleLevelUp = () => {
    if (currentLevelId < 12) {
      setCurrentLevelId(prev => prev + 1);
      setXp(0);
      setStreak(s => s + 1);
    }
  };

  const handleCompleteQuest = (id: string) => {
    setQuests(prev => {
      const updated = prev.map(q => {
        if (q.id === id && !q.completed) {
          const newXp = xp + q.xpReward;
          // Check for level up
          if (newXp >= maxXp) {
             setTimeout(handleLevelUp, 1000);
          } else {
             setXp(newXp);
          }
          return { ...q, completed: true };
        }
        return q;
      });
      return updated;
    });
  };

  const currentLevelData = LEVEL_ROADMAP.find(l => l.id === currentLevelId);
  const completedCount = quests.filter(q => q.completed).length;
  const totalQuests = quests.length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-system-blue font-mono animate-pulse">
          >> INITIALIZING SYSTEM MEMORY...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-system-blue selection:text-black pb-20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      {/* System Modal Overlay (Welcome) */}
      {showSystemMsg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <SystemBox variant="blue" className="max-w-md w-full mx-4 animate-pulse">
             <div className="text-center space-y-4 py-6">
                <h2 className="text-2xl font-bold text-system-blue tracking-wider">SYSTEM ALERT</h2>
                <p className="font-mono text-sm">
                  Welcome, Player.<br/>
                  <span className="text-xs text-slate-500">Connecting to Akashic Records (Database)...</span>
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-system-blue to-transparent" />
             </div>
          </SystemBox>
        </div>
      )}

      {/* Main Interface */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        <PlayerHeader 
          level={currentLevelId} 
          xp={xp} 
          maxXp={maxXp}
          title={currentLevelData?.title || 'Unknown'} 
        />

        <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Stats & Status (Sticky on Desktop) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              <SystemBox>
                <div className="flex items-center justify-between mb-4 text-system-blue">
                   <div className="flex items-center gap-2">
                     <Activity size={18} />
                     <h3 className="font-bold tracking-widest text-sm">STATUS</h3>
                   </div>
                   <div className="flex items-center gap-1 text-[10px] text-orange-400 border border-orange-900 bg-orange-950/30 px-2 py-0.5 rounded">
                     <Flame size={10} /> {streak} DAY STREAK
                   </div>
                </div>
                <StatsPanel stats={stats} />
                
                <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] font-mono text-slate-400">
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span>STR (Prob Solv)</span> <span className="text-white">{stats.problemSolving}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span>AGI (DevOps)</span> <span className="text-white">{stats.devOps}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span>INT (Sys Des)</span> <span className="text-white">{stats.systemDesign}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span>VIT (Perf)</span> <span className="text-white">{stats.performance}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span>PER (DB)</span> <span className="text-white">{stats.databases}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span>MAN (OS)</span> <span className="text-white">{stats.os}</span>
                  </div>
                </div>
              </SystemBox>

              <SystemBox className="hidden lg:block">
                 <div className="flex items-center gap-2 mb-2 text-slate-400">
                   <Terminal size={16} />
                   <h3 className="font-bold tracking-widest text-xs">SYSTEM LOG</h3>
                 </div>
                 <div className="h-32 overflow-y-auto text-[10px] font-mono text-slate-500 space-y-1 custom-scrollbar">
                    <p>> [SYSTEM] Player initialized.</p>
                    <p>> [SYSTEM] Connecting to Cloud Storage...</p>
                    <p>> [SYSTEM] Month {currentLevelId} quests loaded.</p>
                    {quests.some(q => q.type === 'BOSS' && !q.completed) && (
                      <p className="text-system-crimson animate-pulse">> [ALERT] Boss Quest Detected.</p>
                    )}
                 </div>
              </SystemBox>
            </div>
          </div>

          {/* Center Column: Roadmap */}
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center justify-between">
               <h2 className="text-xl font-bold text-white tracking-widest border-l-4 border-system-blue pl-4">
                 PROGRESSION ROADMAP
               </h2>
               <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                 <Database size={12} className="text-system-blue" />
                 CHAPTER {currentLevelId} / 12
               </div>
            </div>
            <LevelRoadmap levels={LEVEL_ROADMAP} currentLevelId={currentLevelId} />
          </div>

          {/* Right Column: Quests */}
          <div className="lg:col-span-3">
             <div className="lg:sticky lg:top-28 space-y-6">
                
                {/* Boss Event Banner */}
                {quests.some(q => q.type === 'BOSS' && !q.completed) ? (
                  <SystemBox variant="crimson" className="animate-pulse-slow">
                    <div className="flex items-center justify-center gap-2 text-system-crimson font-bold text-sm tracking-[0.2em] mb-2">
                      <Trophy size={16} />
                      BOSS BATTLE
                    </div>
                    <div className="text-center text-xs text-red-200">
                      BOSS QUEST ACTIVE<br/>
                      <span className="text-[10px] opacity-70">Complete to prove your rank.</span>
                    </div>
                  </SystemBox>
                ) : (
                   <SystemBox variant="blue">
                    <div className="text-center text-xs text-slate-400">
                      ALL BOSSES DEFEATED<br/>
                      <span className="text-[10px] text-system-blue">Awaiting next dungeon...</span>
                    </div>
                  </SystemBox>
                )}

                <div className="flex items-center justify-between px-2">
                   <span className="text-[10px] font-mono text-slate-500">QUESTS: {completedCount}/{totalQuests}</span>
                   <div className="w-24 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                     <div className="h-full bg-system-blue" style={{ width: `${(completedCount/totalQuests) * 100}%` }} />
                   </div>
                </div>

                <QuestLog quests={quests} onComplete={handleCompleteQuest} />
                
                <div className="mt-8 p-4 border border-slate-800 rounded bg-slate-950/50">
                  <h4 className="text-xs text-slate-500 font-bold mb-2 uppercase tracking-wider">Achievements</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="aspect-square bg-slate-900 border border-slate-700 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-help" title="Locked Achievement">
                        <Trophy size={16} className="text-yellow-600" />
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;
