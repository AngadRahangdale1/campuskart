import { initializeApp } from "firebase/app";
// @ts-ignore: getReactNativePersistence exists in the RN bundle at runtime,
// but is missing from the public TypeScript type definitions (known Firebase SDK issue)
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyApng7zrUG3O1JkAp878LlP_XLBQlGQS3I",
  authDomain: "campuskart-71136.firebaseapp.com",
  projectId: "campuskart-71136",
  storageBucket: "campuskart-71136.firebasestorage.app",
  messagingSenderId: "544389623256",
  appId: "1:544389623256:web:583c1088f55e741bf8d6ad",
  measurementId: "G-3VW0SQLP05"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

