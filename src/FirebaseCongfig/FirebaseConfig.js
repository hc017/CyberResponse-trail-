// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5kgkbKhHVVa9MmJwpD7zNZP5p-T-Huxw",
  authDomain: "cybersoochna-ec4e6.firebaseapp.com",
  projectId: "cybersoochna-ec4e6",
  storageBucket: "cybersoochna-ec4e6.appspot.com",
  messagingSenderId: "370994734512",
  appId: "1:370994734512:web:3e82c1a31746693779e275",
  measurementId: "G-STG4B5C20Z"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default firebaseApp;