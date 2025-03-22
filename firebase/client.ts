// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0EkigyMpeqcXdo0KBUvicPES4qbMbOCM",
  authDomain: "interview-2d145.firebaseapp.com",
  projectId: "interview-2d145",
  storageBucket: "interview-2d145.firebasestorage.app",
  messagingSenderId: "147661015827",
  appId: "1:147661015827:web:802bd8abc111a94110a8e6",
  measurementId: "G-B4M4HWMWZF",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
