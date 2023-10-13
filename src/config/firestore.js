import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configure Firebase

const apiKey = import.meta.env.VITE_FIRESTORE_API;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "react-eshop-b97c2.firebaseapp.com",
  projectId: "react-eshop-b97c2",
  storageBucket: "react-eshop-b97c2.appspot.com",
  messagingSenderId: "403034786887",
  appId: "1:403034786887:web:e2fae174f2618c25093562",
};

// Get Firebase Database

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
