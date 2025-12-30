import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { PlayerStats } from '../types';

interface StatsPanelProps {
  stats: PlayerStats;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  const data = [
    { subject: 'Prob Solv', A: stats.problemSolving, fullMark: 100 },
    { subject: 'Sys Des', A: stats.systemDesign, fullMark: 100 },
    { subject: 'DB', A: stats.databases, fullMark: 100 },
    { subject: 'OS', A: stats.os, fullMark: 100 },
    { subject: 'DevOps', A: stats.devOps, fullMark: 100 },
    { subject: 'Perf', A: stats.performance, fullMark: 100 },
  ];

  return (
    <div className="w-full h-64 relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#1e293b" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Hunter Stats"
            dataKey="A"
            stroke="#00f0ff"
            strokeWidth={2}
            fill="#00f0ff"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>
  );
};