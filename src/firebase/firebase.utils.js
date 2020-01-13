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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email} = userAuth;
      const createAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        });
      }catch(error) {
        console.log('error create', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;