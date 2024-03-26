// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyF3uVHlPqBz7vB1KJMtafEjW6DuYJxco",
  authDomain: "portfolio-ca39b.firebaseapp.com",
  projectId: "portfolio-ca39b",
  storageBucket: "portfolio-ca39b.appspot.com",
  messagingSenderId: "1026242635000",
  appId: "1:1026242635000:web:858aeb9fd7a26d78fa470d",
  measurementId: "G-WGDV8C7988",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
