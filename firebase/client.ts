import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "mockprepper.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "mockprepper.firebasestorage.app",
  messagingSenderId: "232793467732",
  appId: "1:232793467732:web:e083bd44381713d7c876c1",
  measurementId: "G-BJVLL59YP5",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
