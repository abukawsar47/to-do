// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVABIzlV4Nevi3HZXmjv0-yRcg8cm_8iw",
    authDomain: "to-do-930ce.firebaseapp.com",
    projectId: "to-do-930ce",
    storageBucket: "to-do-930ce.appspot.com",
    messagingSenderId: "733754470087",
    appId: "1:733754470087:web:843f74464531f609e198e2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;