// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkPzy55kM0V9lZxLkBpUIt2CkR5KQDd-k",
    authDomain: "antique-avenue.firebaseapp.com",
    projectId: "antique-avenue",
    storageBucket: "antique-avenue.appspot.com",
    messagingSenderId: "209107406499",
    appId: "1:209107406499:web:3eeca5b817cd06c6607916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;