// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUGAbssDvnrmVoTxI2559yH9NeLaVjKBs",
  authDomain: "the-match-fde0b.firebaseapp.com",
  projectId: "the-match-fde0b",
  databaseUrl:
    "https://the-match-fde0b-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "the-match-fde0b.appspot.com",
  messagingSenderId: "810998022268",
  appId: "1:810998022268:web:3b3716a952ea5afe7d89f9",
  measurementId: "G-RYR50ZWBH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
