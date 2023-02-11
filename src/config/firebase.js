// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAgjre_wF-JlH3D7KfNjSrlSVmmiNFACfs",
  authDomain: "lista-df9fd.firebaseapp.com",
  projectId: "lista-df9fd",
  storageBucket: "lista-df9fd.appspot.com",
  messagingSenderId: "846159749031",
  appId: "1:846159749031:web:3ae19e21a51e2817afa082",
  measurementId: "G-13RWDJWKQB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
