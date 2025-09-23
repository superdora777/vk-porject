import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMY82r-CDnprNaJdCJN44ZtektIQ1v0t8",
  authDomain: "vk-porject.firebaseapp.com",
  projectId: "vk-porject",
  storageBucket: "vk-porject.firebasestorage.app",
  messagingSenderId: "337047664819",
  appId: "1:337047664819:web:02473350a9188f9fd318c6",
  measurementId: "G-8B2Z99E0L3",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
