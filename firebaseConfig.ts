
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGYWUff1sURSJkGUCJe7jaLUmBoNYS6tE",
  authDomain: "solodevlevelling.firebaseapp.com",
  projectId: "solodevlevelling",
  storageBucket: "solodevlevelling.firebasestorage.app",
  messagingSenderId: "10503634252",
  appId: "1:10503634252:web:f5cd02716fc38c1633e3e9",
  measurementId: "G-D6JJJ5ECCK"
};

let app;
let analytics;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  // Analytics is optional, wrapping in try/catch in case of environment issues
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.warn(">> [SYSTEM] Analytics Module Offline.");
  }
  console.log(">> [SYSTEM] Database Link Established.");
} catch (error) {
  console.error(">> [SYSTEM] Database Connection Failed:", error);
}

export { app, analytics, db };
