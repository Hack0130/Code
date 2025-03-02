// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8rHvDbuijjPQ_QDZ6aQ8VzZ2kwdzbY7I",
  authDomain: "sonnny-b8f40.firebaseapp.com",
  projectId: "sonnny-b8f40",
  storageBucket: "sonnny-b8f40.appspot.com",
  messagingSenderId: "979405202797",
  appId: "1:979405202797:web:06f0b7212c4c24b1a72664",
  measurementId: "G-QR2Z2VS0RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);