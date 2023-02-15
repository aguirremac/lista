// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCse2ApA1lHBnbfvCgfbKkje3UMijST2ok',
  authDomain: 'lista-2-67122.firebaseapp.com',
  projectId: 'lista-2-67122',
  storageBucket: 'lista-2-67122.appspot.com',
  messagingSenderId: '933901223938',
  appId: '1:933901223938:web:2c519901a0b073324cbf1b',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
