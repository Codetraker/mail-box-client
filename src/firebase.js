import firebase from "firebase/compat/app";
import  "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_GLymBox6KD4Iv4SUsnCZlQposaUqBOI",
    authDomain: "mailbox-4af73.firebaseapp.com",
    projectId: "mailbox-4af73",
    storageBucket: "mailbox-4af73.appspot.com",
    messagingSenderId: "1074462635205",
    appId: "1:1074462635205:web:4252191f9669a30ae0ecac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };