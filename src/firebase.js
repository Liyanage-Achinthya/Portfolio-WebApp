import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjz7Vx7G--KXWxk2atfVmbBZGuGxmU22I",
  authDomain: "itsmeachinthya.firebaseapp.com",
  projectId: "itsmeachinthya",
  storageBucket: "itsmeachinthya.firebasestorage.app",
  messagingSenderId: "100546431747",
  appId: "1:100546431747:web:01803c184f1140af13b736"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
