// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lista-3.firebaseapp.com",
  projectId: "lista-3",
  storageBucket: "lista-3.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID ,
  appId: process.env.APP_ID,

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
