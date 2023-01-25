// Import the functions you need from the SDKs you need
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa6jZOGM94rX28Yh5qUH90_Emr4RgcTuA",
  authDomain: "fir-react-183a1.firebaseapp.com",
  projectId: "fir-react-183a1",
  storageBucket: "fir-react-183a1.appspot.com",
  messagingSenderId: "807448884481",
  appId: "1:807448884481:web:4d8590cd2366bb4f149700",
  measurementId: "G-CDH0KWLVQ3",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
console.log("db===>", db);
const analytics = getAnalytics(db);
const auth = getAuth(db);
const database = db.database;
console.log("database==>", database);

export {
  db,
  database,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getDatabase,
  ref,
  set,
};
