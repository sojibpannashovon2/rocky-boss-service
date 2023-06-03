// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd0aN6sFJ2YsrzwN87mnx5W0pk9HrdNPk",
    authDomain: "rocky-boss-service.firebaseapp.com",
    projectId: "rocky-boss-service",
    storageBucket: "rocky-boss-service.appspot.com",
    messagingSenderId: "899671504815",
    appId: "1:899671504815:web:97ccd707ac586b3810e15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;