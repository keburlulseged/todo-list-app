import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXGUg6kho7EX6Srcgoxf0OUSj-bFyZWZg",
  authDomain: "todo-list-app-b4b6f.firebaseapp.com",
  databaseURL: "https://todo-list-app-b4b6f.firebaseio.com",
  projectId: "todo-list-app-b4b6f",
  storageBucket: "todo-list-app-b4b6f.appspot.com",
  messagingSenderId: "853742614330",
  appId: "1:853742614330:web:965520f400def2eaf0c203",
  measurementId: "G-4SCMKTTW7W"
});

const db = firebaseApp.firestore();



export default db;
