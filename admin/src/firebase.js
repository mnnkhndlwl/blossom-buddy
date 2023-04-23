// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "blossom-f2718.firebaseapp.com",
  projectId: "blossom-f2718",
  storageBucket: "blossom-f2718.appspot.com",
  messagingSenderId: "741000206668",
  appId: "1:741000206668:web:9fe15880a34eb41e29d7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const auth = getAuth();
//export const provider = new GoogleAuthProvider();

export default app;