import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyCF_WApDI5RdZMnpC4r1Jt8A_NnZ4_Rgss",
  // authDomain: "nextsocial-88001.firebaseapp.com",
  // projectId: "nextsocial-88001",
  // storageBucket: "nextsocial-88001.appspot.com",
  // messagingSenderId: "696287987985",
  // appId: "1:696287987985:web:04b58f9be3af5cda9ce4b0",
  // measurementId: "G-JNSFJHXR21",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
