// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDFV0Hee04mxi1-v_5VYhOyR2R4NmBw8GQ",
  authDomain: "clone-13897.firebaseapp.com",
  projectId: "clone-13897",
  storageBucket: "clone-13897.appspot.com",
  messagingSenderId: "1098955243053",
  appId: "1:1098955243053:web:cb12a9a6f8d4fbf67742a4",
  measurementId: "G-D5KRMWK0BM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
