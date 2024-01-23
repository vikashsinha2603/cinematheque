// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsa0FSVjD3Eg68YsbwIgg5XXE2mmIs1X0",
  authDomain: "cinematheque-87535.firebaseapp.com",
  projectId: "cinematheque-87535",
  storageBucket: "cinematheque-87535.appspot.com",
  messagingSenderId: "661763217210",
  appId: "1:661763217210:web:3362487c665c6c78be6203",
  measurementId: "G-6KX4FJMDZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();