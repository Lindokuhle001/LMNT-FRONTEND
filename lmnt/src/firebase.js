import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoJkSpYz5SApKQUE0smPm20KEdm8TxAvU",
    authDomain: "lmnt-3c7b2.firebaseapp.com",
    projectId: "lmnt-3c7b2",
    storageBucket: "lmnt-3c7b2.appspot.com",
    messagingSenderId: "472645395560",
    appId: "1:472645395560:web:e7adf3f2e339b36f41c7dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;