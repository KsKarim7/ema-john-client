// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC5dD2TyeL-zV7AVYWOFrWYrBpRQd4i34",
    authDomain: "ema-john-simple-40515.firebaseapp.com",
    projectId: "ema-john-simple-40515",
    storageBucket: "ema-john-simple-40515.appspot.com",
    messagingSenderId: "1065187811322",
    appId: "1:1065187811322:web:3547235afcf0078826ce43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;