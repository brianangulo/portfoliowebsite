import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
  MEASUREMENTID,
} from "./config";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //get from firebase console
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

console.log(firebase);