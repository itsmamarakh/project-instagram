import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBdLaRQDqkWcBSMDvK91iRSxgHCNZycWu8",
  authDomain: "instagram-b1207.firebaseapp.com",
  projectId: "instagram-b1207",
  storageBucket: "instagram-b1207.appspot.com",
  messagingSenderId: "7194009068",
  appId: "1:7194009068:web:e5e3bf595063d2f038b4c9",
  measurementId: "G-WQGNBKG1VV"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
