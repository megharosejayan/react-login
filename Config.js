import firebase from "firebase"

var config = {
    apiKey: "AIzaSyAl218Sdaun5Hp_DLzAf7AOPtYt_iBsYHQ",
    authDomain: "newassign-35737.firebaseapp.com",
    databaseURL: "https://newassign-35737.firebaseio.com",
    projectId: "newassign-35737",
    storageBucket: "newassign-35737.appspot.com",
    messagingSenderId: "864841534993"
  };
  firebase.initializeApp(config);

  export const Auth = firebase.auth();
  export const db = firebase.database() 