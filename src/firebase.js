import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFf3wN08At6_IXCMuB0AQo5V7JhkvRFpQ",
  authDomain: "tik-tok-clone-36715.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-36715.firebaseio.com",
  projectId: "tik-tok-clone-36715",
  storageBucket: "tik-tok-clone-36715.appspot.com",
  messagingSenderId: "953923689111",
  appId: "1:953923689111:web:f9d192e7facc2750a167d2",
  measurementId: "G-RXY712H8CE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
