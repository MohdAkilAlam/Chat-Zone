// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQj2RRjU5p1zR4n-pPHuOiNoW7C0rwAAw",
  authDomain: "chat-app-cb6df.firebaseapp.com",
  projectId: "chat-app-cb6df",
  storageBucket: "chat-app-cb6df.appspot.com",
  messagingSenderId: "457501228110",
  appId: "1:457501228110:web:1a43dc846470069cdc171f",
  measurementId: "G-9RRTD1ZL0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const DBStorage = getStorage();