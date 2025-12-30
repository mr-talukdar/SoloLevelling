
import { LevelData, Rank, Quest, PlayerStats } from './types';

export const INITIAL_STATS: PlayerStats = {
  problemSolving: 10,
  systemDesign: 5,
  databases: 5,
  os: 5,
  devOps: 5,
  performance: 5,
};

export const LEVEL_ROADMAP: LevelData[] = [
  {
    id: 1,
    title: "Awakening",
    rank: Rank.E,
    primaryFocus: "DSA Fundamentals",
    secondaryFocus: "Clean Coding Discipline",
    abilities: ["Pattern Recognition I", "Refactoring"],
    description: "Master Arrays, Hashing, Two Pointers. Refactor Apex modules consciously.",
    isUnlocked: true,
    isCompleted: false,
  },
  {
    id: 2,
    title: "Structure Awareness",
    rank: Rank.E,
    primaryFocus: "Core Data Structures",
    secondaryFocus: "Basic SQL",
    abilities: ["Data Shape Awareness", "Schema Design"],
    description: "Linked Lists, Trees. Improve Apex DB schema with Indexes and Joins.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 3,
    title: "Optimization Instinct",
    rank: Rank.D,
    primaryFocus: "Intermediate DSA",
    secondaryFocus: "API Design Basics",
    abilities: ["Optimization Sense I", "Clean APIs"],
    description: "Binary Search, Heaps, Backtracking. Define clean API boundaries in Apex.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Systems Beginner",
    rank: Rank.D,
    primaryFocus: "System Design Basics",
    secondaryFocus: "Databases Deep Dive",
    abilities: ["System Thinking I", "Normalization"],
    description: "Client-Server, REST, Caching. Add caching or pagination to Apex.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 5,
    title: "Distributed Thinking",
    rank: Rank.C,
    primaryFocus: "Advanced System Design",
    secondaryFocus: "OS Fundamentals",
    abilities: ["Concurrency Awareness", "Async Processing"],
    description: "Load balancing, Queues. Implement background jobs or async flows in Apex.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 6,
    title: "Engineering Maturity",
    rank: Rank.C,
    primaryFocus: "Tradeoffs & Architecture",
    secondaryFocus: "Graph Algorithms",
    abilities: ["Tradeoff Judgment", "BFS/DFS"],
    description: "CAP theorem, Consistency models. Create architecture diagrams for Apex.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 7,
    title: "DevOps Initiate",
    rank: Rank.B,
    primaryFocus: "DevOps Fundamentals",
    secondaryFocus: "Observability",
    abilities: ["Production Awareness", "Docker Mastery"],
    description: "CI/CD, Logging, Metrics. Containerize Apex and add monitoring.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 8,
    title: "Reliability Engineer",
    rank: Rank.B,
    primaryFocus: "Resilience & Scaling",
    secondaryFocus: "Networking",
    abilities: ["Fault Tolerance", "Circuit Breakers"],
    description: "Retries, HTTP, TCP. Add rate limiting and retry logic to Apex.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 9,
    title: "Performance Engineer",
    rank: Rank.A,
    primaryFocus: "Performance Optimization",
    secondaryFocus: "Cost Awareness",
    abilities: ["Performance Sense II", "Profiling"],
    description: "Find bottlenecks. Optimize Apex speed and cloud costs.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 10,
    title: "Senior Thinking",
    rank: Rank.A,
    primaryFocus: "Large Scale Design",
    secondaryFocus: "Security Basics",
    abilities: ["Security Awareness", "Threat Modeling"],
    description: "Auth, Secrets. Harden Apex security for millions of users.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 11,
    title: "Technical Leadership",
    rank: Rank.S,
    primaryFocus: "Decision Making",
    secondaryFocus: "Documentation",
    abilities: ["Architectural Authority", "Tech Writing"],
    description: "ADRs, Design Docs. Write full system design doc for Apex.",
    isUnlocked: false,
    isCompleted: false,
  },
  {
    id: 12,
    title: "Ascended Engineer",
    rank: Rank.MONARCH,
    primaryFocus: "Mastery Integration",
    secondaryFocus: "Interview Readiness",
    abilities: ["Solid Software Engineer", "Legacy"],
    description: "Final Apex refactor. Polish GitHub. Prepare for the next level.",
    isUnlocked: false,
    isCompleted: false,
  },
];

export const MONTHLY_QUESTS: Record<number, Quest[]> = {
  1: [
    { id: '1-core', type: 'CORE', title: 'Daily Algorithm', description: 'Solve 1 LeetCode problem (JS) & write pattern in one sentence.', difficulty: Rank.E, rewards: ['+50 XP', 'DSA Insight'], penalty: 'Stagnation', completed: false, xpReward: 50 },
    { id: '1-side', type: 'SIDE', title: 'Code Clarity', description: 'Refactor one small function in Apex for clarity.', difficulty: Rank.E, rewards: ['+30 XP'], penalty: 'None', completed: false, xpReward: 30 },
    { id: '1-boss', type: 'BOSS', title: 'Cleanup Dungeon', description: 'Clean up one inefficient flow in Apex.', difficulty: Rank.D, rewards: ['+200 XP', 'Refactoring Badge'], penalty: '-50 HP', completed: false, xpReward: 200 }
  ],
  2: [
    { id: '2-core', type: 'CORE', title: 'Data Flow Trace', description: 'Solve 1 DSA problem and manually trace data flow.', difficulty: Rank.E, rewards: ['+55 XP'], penalty: 'Stagnation', completed: false, xpReward: 55 },
    { id: '2-side', type: 'SIDE', title: 'Knowledge Absorption', description: 'Read 5 minutes of SQL concepts.', difficulty: Rank.E, rewards: ['+30 XP'], penalty: 'None', completed: false, xpReward: 30 },
    { id: '2-boss', type: 'BOSS', title: 'Schema Optimization', description: 'Improve Apex database schema or queries.', difficulty: Rank.D, rewards: ['+220 XP', 'DB Insight'], penalty: '-50 HP', completed: false, xpReward: 220 }
  ],
  3: [
    { id: '3-core', type: 'CORE', title: 'Dual Implementation', description: 'Solve 1 DSA problem: Write Brute Force & Optimized versions.', difficulty: Rank.D, rewards: ['+60 XP'], penalty: 'Stagnation', completed: false, xpReward: 60 },
    { id: '3-side', type: 'SIDE', title: 'API Craftsman', description: 'Improve one API endpoint design in Apex.', difficulty: Rank.D, rewards: ['+35 XP'], penalty: 'None', completed: false, xpReward: 35 },
    { id: '3-boss', type: 'BOSS', title: 'Bottleneck Breaker', description: 'Remove one performance bottleneck in Apex.', difficulty: Rank.C, rewards: ['+250 XP', 'Speed Badge'], penalty: '-100 HP', completed: false, xpReward: 250 }
  ],
  4: [
    { id: '4-core', type: 'CORE', title: 'System Sketch', description: 'Study 1 System Design concept and sketch a diagram.', difficulty: Rank.D, rewards: ['+65 XP'], penalty: 'Stagnation', completed: false, xpReward: 65 },
    { id: '4-side', type: 'SIDE', title: 'Maintenance', description: 'Solve 1 DSA problem to maintain sharpness.', difficulty: Rank.E, rewards: ['+30 XP'], penalty: 'None', completed: false, xpReward: 30 },
    { id: '4-boss', type: 'BOSS', title: 'Caching Layer', description: 'Add caching or pagination to Apex.', difficulty: Rank.C, rewards: ['+270 XP', 'Efficiency'], penalty: '-80 HP', completed: false, xpReward: 270 }
  ],
  5: [
    { id: '5-core', type: 'CORE', title: 'Distributed Theory', description: 'Study 1 Distributed Concept & write 3 failure cases.', difficulty: Rank.C, rewards: ['+70 XP'], penalty: 'Stagnation', completed: false, xpReward: 70 },
    { id: '5-side', type: 'SIDE', title: 'Graph Logic', description: 'Solve 1 Graph or Recursion problem.', difficulty: Rank.C, rewards: ['+40 XP'], penalty: 'None', completed: false, xpReward: 40 },
    { id: '5-boss', type: 'BOSS', title: 'Async Awakening', description: 'Implement async or background processing in Apex.', difficulty: Rank.C, rewards: ['+300 XP', 'Concurrency'], penalty: '-100 HP', completed: false, xpReward: 300 }
  ],
  6: [
    { id: '6-core', type: 'CORE', title: 'Traversal Master', description: 'Solve 1 BFS/DFS problem and identify tradeoffs.', difficulty: Rank.C, rewards: ['+75 XP'], penalty: 'Stagnation', completed: false, xpReward: 75 },
    { id: '6-side', type: 'SIDE', title: 'Architects Log', description: 'Update Apex architecture notes.', difficulty: Rank.D, rewards: ['+30 XP'], penalty: 'None', completed: false, xpReward: 30 },
    { id: '6-boss', type: 'BOSS', title: 'Tradeoff Refactor', description: 'Refactor an Apex module using tradeoff analysis.', difficulty: Rank.B, rewards: ['+350 XP', 'Architect Badge'], penalty: '-150 HP', completed: false, xpReward: 350 }
  ],
  7: [
    { id: '7-core', type: 'CORE', title: 'Ops Training', description: 'Learn 1 DevOps concept and apply locally.', difficulty: Rank.B, rewards: ['+80 XP'], penalty: 'Stagnation', completed: false, xpReward: 80 },
    { id: '7-side', type: 'SIDE', title: 'Visibility', description: 'Add logs to one Apex feature.', difficulty: Rank.D, rewards: ['+35 XP'], penalty: 'None', completed: false, xpReward: 35 },
    { id: '7-boss', type: 'BOSS', title: 'Pipeline Master', description: 'Improve CI/CD or Docker setup.', difficulty: Rank.B, rewards: ['+400 XP', 'DevOps Badge'], penalty: '-200 HP', completed: false, xpReward: 400 }
  ],
  8: [
    { id: '8-core', type: 'CORE', title: 'Resilience Drill', description: 'Learn 1 reliability concept & find failure scenario.', difficulty: Rank.B, rewards: ['+85 XP'], penalty: 'Stagnation', completed: false, xpReward: 85 },
    { id: '8-side', type: 'SIDE', title: 'Error Proofing', description: 'Improve error handling in one module.', difficulty: Rank.C, rewards: ['+40 XP'], penalty: 'None', completed: false, xpReward: 40 },
    { id: '8-boss', type: 'BOSS', title: 'Circuit Breaker', description: 'Implement rate limiting, retry, or timeout logic.', difficulty: Rank.A, rewards: ['+450 XP', 'Reliability'], penalty: '-250 HP', completed: false, xpReward: 450 }
  ],
  9: [
    { id: '9-core', type: 'CORE', title: 'Efficiency Hunter', description: 'Identify one inefficiency and improve it measurably.', difficulty: Rank.A, rewards: ['+90 XP'], penalty: 'Stagnation', completed: false, xpReward: 90 },
    { id: '9-side', type: 'SIDE', title: 'DB Tuning', description: 'Read 5 minutes on database optimization.', difficulty: Rank.C, rewards: ['+40 XP'], penalty: 'None', completed: false, xpReward: 40 },
    { id: '9-boss', type: 'BOSS', title: 'Profiler Run', description: 'Run performance profiling on Apex.', difficulty: Rank.A, rewards: ['+500 XP', 'Speed Demon'], penalty: '-300 HP', completed: false, xpReward: 500 }
  ],
  10: [
    { id: '10-core', type: 'CORE', title: 'Scale Study', description: 'Study 1 Large Scale Pattern and write tradeoffs.', difficulty: Rank.A, rewards: ['+95 XP'], penalty: 'Stagnation', completed: false, xpReward: 95 },
    { id: '10-side', type: 'SIDE', title: 'Security Patch', description: 'Improve Apex security in one place.', difficulty: Rank.B, rewards: ['+45 XP'], penalty: 'None', completed: false, xpReward: 45 },
    { id: '10-boss', type: 'BOSS', title: 'Subsystem Rebirth', description: 'Redesign one Apex subsystem.', difficulty: Rank.S, rewards: ['+600 XP', 'System Architect'], penalty: '-400 HP', completed: false, xpReward: 600 }
  ],
  11: [
    { id: '11-core', type: 'CORE', title: 'Decision Log', description: 'Write one architecture decision record (ADR).', difficulty: Rank.S, rewards: ['+100 XP'], penalty: 'Stagnation', completed: false, xpReward: 100 },
    { id: '11-side', type: 'SIDE', title: 'Doc Review', description: 'Review Apex documentation.', difficulty: Rank.C, rewards: ['+50 XP'], penalty: 'None', completed: false, xpReward: 50 },
    { id: '11-boss', type: 'BOSS', title: 'The Blueprint', description: 'Produce the full Apex system design document.', difficulty: Rank.S, rewards: ['+700 XP', 'Tech Lead'], penalty: '-500 HP', completed: false, xpReward: 700 }
  ],
  12: [
    { id: '12-core', type: 'CORE', title: 'The Trinity', description: 'Combine DSA, Design, and Performance in one task.', difficulty: Rank.MONARCH, rewards: ['+150 XP'], penalty: 'Stagnation', completed: false, xpReward: 150 },
    { id: '12-side', type: 'SIDE', title: 'Mock Interview', description: 'Interview prep problem or mock session.', difficulty: Rank.A, rewards: ['+60 XP'], penalty: 'None', completed: false, xpReward: 60 },
    { id: '12-boss', type: 'BOSS', title: 'Ascension', description: 'Final Apex refactor and portfolio polish.', difficulty: Rank.MONARCH, rewards: ['+1000 XP', 'S-Rank Engineer'], penalty: 'Failure', completed: false, xpReward: 1000 }
  ]
};

export const INITIAL_QUESTS = MONTHLY_QUESTS[1];
