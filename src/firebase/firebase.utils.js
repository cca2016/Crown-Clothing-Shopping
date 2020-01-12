import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBw4yypaFlbWKjftkCxuGYWeR-WHXGr08w",
    authDomain: "crown-db-d369d.firebaseapp.com",
    databaseURL: "https://crown-db-d369d.firebaseio.com",
    projectId: "crown-db-d369d",
    storageBucket: "crown-db-d369d.appspot.com",
    messagingSenderId: "873655029714",
    appId: "1:873655029714:web:4ff78317737016b56a420b",
    measurementId: "G-HLEWC88CWB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;