// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhlirZFFOA5wTR6ygrztkoNTIBdqepcx0",
  authDomain: "reactfiarbase.firebaseapp.com",
  projectId: "reactfiarbase",
  storageBucket: "reactfiarbase.appspot.com",
  messagingSenderId: "320194012230",
  appId: "1:320194012230:web:5bb6096587698aa4111647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};