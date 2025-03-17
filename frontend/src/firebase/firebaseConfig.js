// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLpTp0f8JqpATvS6UZGP1NlwVU6xeLE8o",
  authDomain: "genai-a91b1.firebaseapp.com",
  projectId: "genai-a91b1",
  storageBucket: "genai-a91b1.firebasestorage.app",
  messagingSenderId: "24766396565",
  appId: "1:24766396565:web:927b681296db97b049839c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
