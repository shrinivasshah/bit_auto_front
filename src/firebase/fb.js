import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDGUv19xB7WNME6uKdUOXYiOXyu_Ettlc4",
  authDomain: "fir-python-4df85.firebaseapp.com",
  databaseURL: "https://fir-python-4df85.firebaseio.com",
  projectId: "fir-python-4df85",
  storageBucket: "fir-python-4df85.appspot.com",
  messagingSenderId: "655638121195",
  appId: "1:655638121195:web:6f2c70b3c781e9558d0cae",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
