import "firebase/analytics";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/performance";
import "firebase/remote-config";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID
};
firebase.initializeApp(config);
const firestoreRef: firebase.firestore.Firestore = firebase.firestore();
export const groupsRef: firebase.firestore.CollectionReference = firestoreRef.collection("groups");
export const usersRef: firebase.firestore.CollectionReference = firestoreRef.collection("users");

export const authRef: firebase.auth.Auth = firebase.auth();

export default firebase;