// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhCUIdFvI2xK6pQvMdcYSK0B1pzFJh_uw",
  authDomain: "ecommerce-597b3.firebaseapp.com",
  projectId: "ecommerce-597b3",
  storageBucket: "ecommerce-597b3.appspot.com",
  messagingSenderId: "624489464101",
  appId: "1:624489464101:web:cdcd5c679f68dc7f719acc",
  measurementId: "G-D1K61R1GRC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
export const projectStorage = getStorage();
export const projectFirestore = getFirestore();