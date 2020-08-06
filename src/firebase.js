import React from 'react';
import firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyCwwSh1Uw6IGpQGTG1qfk_h1P4k_aHnfbc",
//   authDomain: "bible-premier-league.firebaseapp.com",
//   databaseURL: "https://bible-premier-league.firebaseio.com",
//   projectId: "bible-premier-league",
//   storageBucket: "bible-premier-league.appspot.com",
//   messagingSenderId: "971428555826",
//   appId: "1:971428555826:web:baa2e57fbd326a2e58602b"
// }
var firebaseConfig = {
  apiKey: "AIzaSyD6znDU_BrPc2DK-0OZClk5ZI0P80AkDKY",
  authDomain: "bible-premiure-league.firebaseapp.com",
  databaseURL: "https://bible-premiure-league.firebaseio.com",
  projectId: "bible-premiure-league",
  storageBucket: "bible-premiure-league.appspot.com",
  messagingSenderId: "852588139390",
  appId: "1:852588139390:web:012d094298531869e4192f",
  measurementId: "G-17F55BFZEC"
};


if (!firebase.apps.length) {
  console.log("hi")
  firebase.initializeApp(firebaseConfig);
  console.log("done");
}


export default firebase;