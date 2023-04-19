import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWNFq6tEk_IM535jaJY_-4N8TVmjgGcb8",
  authDomain: "eshop-46a34.firebaseapp.com",
  projectId: "eshop-46a34",
  storageBucket: "eshop-46a34.appspot.com",
  messagingSenderId: "741949994787",
  appId: "1:741949994787:web:24467d263859b30969be96",
  measurementId: "G-REV6CWS99C"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };