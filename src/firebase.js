import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCKVozbjXDDHieKdDwq_WujSwQ0X6pzRHw",
  authDomain: "chat-gym-e9283.firebaseapp.com",
  projectId: "chat-gym-e9283",
  storageBucket: "chat-gym-e9283.appspot.com",
  messagingSenderId: "615376419728",
  appId: "1:615376419728:web:c573a27998c360d666d115"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export const storage = getStorage();
export const db = getFirestore();