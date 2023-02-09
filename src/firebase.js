// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBu0cy6U66wMhmr1k_G-uAH9faqKi0CBF8",
  authDomain: "db-dash-frontend.firebaseapp.com",
  projectId: "db-dash-frontend",
  storageBucket: "db-dash-frontend.appspot.com",
  messagingSenderId: "608121647939",
  appId: "1:608121647939:web:3f9f72e9468ab60686b5f6",
  measurementId: "G-QYPSR529CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
