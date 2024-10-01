// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhr52R1bFDVq5cq5IQ8ZVmyXG7hr7PuBA",
  authDomain: "bootcamp-the-breaking-news.firebaseapp.com",
  projectId: "bootcamp-the-breaking-news",
  storageBucket: "bootcamp-the-breaking-news.appspot.com",
  messagingSenderId: "891511000996",
  appId: "1:891511000996:web:ae617d6c62024fd5d5bb31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
