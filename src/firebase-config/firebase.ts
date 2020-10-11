import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";
import "firebase/analytics";
import "firebase/remote-config";
import "firebase/performance";

console.log(process.env);
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
const databaseRef: firebase.database.Reference = firebase.database().ref();
export const groupsRef: firebase.database.Reference = databaseRef.child("groups");
export const usersRef: firebase.database.Reference = databaseRef.child("users");

export const authRef: firebase.auth.Auth = firebase.auth();

export default firebase;