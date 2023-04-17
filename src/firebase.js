import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDWNFq6tEk_IM535jaJY_-4N8TVmjgGcb8",
  authDomain: "eshop-46a34.firebaseapp.com",
  projectId: "eshop-46a34",
  storageBucket: "eshop-46a34.appspot.com",
  messagingSenderId: "741949994787",
  appId: "1:741949994787:web:24467d263859b30969be96",
  measurementId: "G-REV6CWS99C"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };