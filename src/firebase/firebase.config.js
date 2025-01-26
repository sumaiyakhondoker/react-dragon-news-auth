// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1WA7lUHAr5ZRF73RUIHE75KDnh6e7W84",
  authDomain: "react-dragon-news-auth-51f29.firebaseapp.com",
  projectId: "react-dragon-news-auth-51f29",
  storageBucket: "react-dragon-news-auth-51f29.firebasestorage.app",
  messagingSenderId: "855787801602",
  appId: "1:855787801602:web:8aabff95068ec0103e6b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;