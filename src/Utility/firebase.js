import firebase from "firebase/compat/app";
//auth
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh45Jo6Qpx-kSQdgyuiR-MhpJxEMUyTIc",
  authDomain: "clone-7e0cb.firebaseapp.com",
  projectId: "clone-7e0cb",
  storageBucket: "clone-7e0cb.firebasestorage.app",
  messagingSenderId: "494742327487",
  appId: "1:494742327487:web:770871cae8dbd85c59f60a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()