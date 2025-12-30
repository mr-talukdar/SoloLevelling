
export enum Rank {
  E = 'E',
  D = 'D',
  C = 'C',
  B = 'B',
  A = 'A',
  S = 'S',
  NATIONAL = 'NATIONAL',
  MONARCH = 'MONARCH'
}

export interface Skill {
  name: string;
  level: number;
  maxLevel: number;
}

export interface LevelData {
  id: number;
  title: string;
  rank: Rank;
  primaryFocus: string;
  secondaryFocus: string;
  abilities: string[];
  description: string;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export interface PlayerStats {
  problemSolving: number;
  systemDesign: number;
  databases: number;
  os: number;
  devOps: number;
  performance: number;
}

export type QuestType = 'CORE' | 'SIDE' | 'BOSS';

export interface Quest {
  id: string;
  type: QuestType;
  title: string;
  description: string;
  difficulty: Rank;
  rewards: string[];
  penalty: string;
  completed: boolean;
  xpReward: number;
}
