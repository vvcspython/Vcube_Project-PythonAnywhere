// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVdzfkatccdWXD7EhES3AAlWmtogOjJXY",
  authDomain: "vcube-project.firebaseapp.com",
  projectId: "vcube-project",
  storageBucket: "vcube-project.firebasestorage.app",
  messagingSenderId: "981466944894",
  appId: "1:981466944894:web:aa63a6c3c5c86b2921cf2f",
  measurementId: "G-7KBP83MDCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export default app;