// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBuX41ir8TwgSArqgEAhP2m4JDOYOtRQH4",
  authDomain: "lista-3.firebaseapp.com",
  projectId: "lista-3",
  storageBucket: "lista-3.appspot.com",
  messagingSenderId: "1067012318538",
  appId: "1:1067012318538:web:a56e98df56174df757cdb3"

};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
