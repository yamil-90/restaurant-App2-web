// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaja8m0Qtrhh0tbEIHYwzATzZUbKbuu58",
  authDomain: "restaurantapp2-c15f2.firebaseapp.com",
  projectId: "restaurantapp2-c15f2",
  storageBucket: "restaurantapp2-c15f2.appspot.com",
  messagingSenderId: "1002381968529",
  appId: "1:1002381968529:web:29c8efc92ab2d273ff6b30",
  measurementId: "G-T85SLFT6NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);