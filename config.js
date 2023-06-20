import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVvYq-ndVIkzh-pqXD5zulelyPwzhxVII",
  authDomain: "task-manager-cf03b.firebaseapp.com",
  projectId: "task-manager-cf03b",
  storageBucket: "task-manager-cf03b.appspot.com",
  messagingSenderId: "377823751553",
  appId: "1:377823751553:web:9cf4b69a53998ec24b8c80",
  measurementId: "G-7849302MFJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
