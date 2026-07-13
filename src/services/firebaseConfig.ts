// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import AsysncStorage from '@react-native-async-storage/async-storage';
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

export const auth = initializeAuth (app, { // In lamen terms, this line initializes the Firebase Authentication service for your app. It sets up the authentication system using the configuration provided in the firebaseConfig object. The getReactNativePersistence(AsyncStorage) part specifies that the authentication state should be persisted using AsyncStorage, which is a storage system for React Native apps. This means that the user's authentication state will be saved across app restarts, allowing them to stay logged in even after closing and reopening the app.
    persistence: getReactNativePersistence(AsysncStorage),
});


const analytics = getAnalytics(app);
export const db = getFirestore(app);