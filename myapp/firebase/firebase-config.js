// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxmVsaDgtLcpDYfitMkPbys8hHfkzSns0",
  authDomain: "fir-v9-766a4.firebaseapp.com",
  projectId: "fir-v9-766a4",
  storageBucket: "fir-v9-766a4.appspot.com",
  messagingSenderId: "210817618584",
  appId: "1:210817618584:web:0c533c5f01888e0c8af6ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);