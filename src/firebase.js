import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API,
  authDomain: "todo-list-app-b4b6f.firebaseapp.com",
  databaseURL: "https://todo-list-app-b4b6f.firebaseio.com",
  projectId: "todo-list-app-b4b6f",
  storageBucket: "todo-list-app-b4b6f.appspot.com",
  messagingSenderId: "853742614330",
  appId: process.env.FIREBASE_ID ,
  measurementId: "G-4SCMKTTW7W"
});

const db = firebaseApp.firestore();



export default db;
