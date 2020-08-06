import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByeWdQ_0cf2goqdb1i3NaNOpCYAaUGy7A",
  authDomain: "firegram-4a4df.firebaseapp.com",
  databaseURL: "https://firegram-4a4df.firebaseio.com",
  projectId: "firegram-4a4df",
  storageBucket: "firegram-4a4df.appspot.com",
  messagingSenderId: "273725344001",
  appId: "1:273725344001:web:50d22edd357611b7c5b300",
  measurementId: "G-C2EVDJDFNG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
