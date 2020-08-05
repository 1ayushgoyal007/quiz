import React from 'react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCwwSh1Uw6IGpQGTG1qfk_h1P4k_aHnfbc",
  authDomain: "bible-premier-league.firebaseapp.com",
  databaseURL: "https://bible-premier-league.firebaseio.com",
  projectId: "bible-premier-league",
  storageBucket: "bible-premier-league.appspot.com",
  messagingSenderId: "971428555826",
  appId: "1:971428555826:web:baa2e57fbd326a2e58602b"
}


if (!firebase.apps.length) {
  console.log("hi")
  firebase.initializeApp(firebaseConfig);
  console.log("done");
}


export default firebase;