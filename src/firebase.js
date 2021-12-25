// import * as firebase from 'firebase';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDbsi1mEGTTKWqhTKPZ3ZiiLZSczkva7lQ",
    authDomain: "clone-20211221.firebaseapp.com",
    projectId: "clone-20211221",
    storageBucket: "clone-20211221.appspot.com",
    messagingSenderId: "729496376380",
    appId: "1:729496376380:web:078ee62474f1e7b8345f39",
    measurementId: "G-JQ0Y6E6CPK"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
  
// Initialize Firebase


export {db,auth};