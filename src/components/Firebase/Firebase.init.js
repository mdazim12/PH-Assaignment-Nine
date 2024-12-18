// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6sI57_TdhInx7Oj7LIx13UlpKVfS0XAY",
  authDomain: "moutain-a8f9e.firebaseapp.com",
  projectId: "moutain-a8f9e",
  storageBucket: "moutain-a8f9e.firebasestorage.app",
  messagingSenderId: "364178939821",
  appId: "1:364178939821:web:54e19f444f398c73e50b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;