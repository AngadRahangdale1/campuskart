// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApng7zrUG3O1JkAp878LlP_XLBQlGQS3I", // This is a sample API key.
  authDomain: "campuskart-71136.firebaseapp.com", // This is a sample auth domain.
  projectId: "campuskart-71136", // This is a sample project ID.
  storageBucket: "campuskart-71136.firebasestorage.app", // This is a sample storage bucket.
  messagingSenderId: "544389623256",
  appId: "1:544389623256:web:583c1088f55e741bf8d6ad",
  measurementId: "G-3VW0SQLP05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);