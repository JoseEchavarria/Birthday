// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdxlkModvDKEAY_lA0sBW8PxCPnkWdftY",
    authDomain: "birthday-80b5a.firebaseapp.com",
    databaseURL: "https://birthday-80b5a.firebaseio.com",
    projectId: "birthday-80b5a",
    storageBucket: "birthday-80b5a.appspot.com",
    messagingSenderId: "493274526989",
    appId: "1:493274526989:web:19c4fcbe712ce2a665ac44"
};

// Initialize Firebase
const FIREBASE = initializeApp(firebaseConfig);
export default FIREBASE;
