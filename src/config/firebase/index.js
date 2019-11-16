import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDkhhlcQlNsZyUeQzVpjGRgzgUbf8VUp0M",
    authDomain: "simple-notes-firebase-44855.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-44855.firebaseio.com",
    projectId: "simple-notes-firebase-44855",
    storageBucket: "simple-notes-firebase-44855.appspot.com",
    messagingSenderId: "1039324526915",
    appId: "1:1039324526915:web:ba562056e225f0ea7097f6",
    measurementId: "G-T6E319QFMX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  

  export default firebase;