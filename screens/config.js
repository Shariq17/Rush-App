import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBVm23H-NiBlV17L6UBGSYZI-3hvjf4DII",
    authDomain: "prototype-8799d.firebaseapp.com",
    databaseURL: "https://prototype-8799d.firebaseio.com",
    projectId: "prototype-8799d",
    storageBucket: "",
    messagingSenderId: "977360166244",
    appId: "1:977360166244:web:a24db9fff7c61fa2"
  };
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database(); 