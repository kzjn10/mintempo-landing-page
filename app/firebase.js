import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyADunnLhwSl3DeosU7Svo8BbvK1Ot_Snyc",
  authDomain: "test-3d1e8a23.firebaseapp.com",
  projectId: "test-3d1e8a23",
  storageBucket: "test-3d1e8a23.firebasestorage.app",
  messagingSenderId: "312516137620",
  appId: "1:312516137620:web:81d8b74cb8d093545b1a81",
};

const app = getApps().some((app) => app.name === firebaseConfig.projectId)
  ? getApp(firebaseConfig.projectId)
  : initializeApp(firebaseConfig, firebaseConfig.projectId);
const db = getFirestore(app);

export { db };
