import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9wfoRApBH-bDBlun_m_L1GBmpFT6KCNQ",
  authDomain: "pilares-inmobiliaria.firebaseapp.com",
  projectId: "pilares-inmobiliaria",
  storageBucket: "pilares-inmobiliaria.appspot.com",
  messagingSenderId: "454245759267",
  appId: "1:454245759267:web:acde06a4d136c1ebbb3496",
  measurementId: "G-9ZNBJ394EZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
