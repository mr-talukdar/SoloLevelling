
import { db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { PlayerStats, Quest } from './types';

// Generate a random ID for the device if one doesn't exist
const STORAGE_KEY = 'system_hunter_id';
export const getUserId = () => {
  let id = localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = 'hunter_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
};

export interface GameState {
  currentLevelId: number;
  xp: number;
  stats: PlayerStats;
  quests: Quest[];
  streak: number;
  lastPlayed: string;
}

export const saveProgress = async (state: GameState) => {
  if (!db) return; // DB not configured
  
  const userId = getUserId();
  try {
    await setDoc(doc(db, "players", userId), {
      ...state,
      lastPlayed: new Date().toISOString()
    }, { merge: true });
    console.log(">> [SYSTEM] Progress Synchronized.");
  } catch (e) {
    console.error(">> [SYSTEM] Sync Error:", e);
  }
};

export const loadProgress = async (): Promise<GameState | null> => {
  if (!db) return null;

  const userId = getUserId();
  try {
    const docRef = doc(db, "players", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as GameState;
    }
  } catch (e) {
    console.error(">> [SYSTEM] Memory Retrieval Failed:", e);
  }
  return null;
};
