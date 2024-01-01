// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0RxPxQbDZI4YVTToxvyBnpHgNnBJjNw8",
    authDomain: "zoory-backers-front.firebaseapp.com",
    projectId: "zoory-backers-front",
    storageBucket: "zoory-backers-front.appspot.com",
    messagingSenderId: "986058762591",
    appId: "1:986058762591:web:ff35caf7c67867e7302eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;