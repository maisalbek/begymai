// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-BGJ5YXa15MG0BIUQfHhhg4n9_DikLqA",
  authDomain: "online-entry.firebaseapp.com",
  projectId: "online-entry",
  storageBucket: "online-entry.appspot.com",
  messagingSenderId: "797446170998",
  appId: "1:797446170998:web:7a2f66b802e09415b9f257",
  measurementId: "G-86KKY9NLPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
