import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBxu8s8BJAoaKIkojsGMTUTsJDu7wRKYgU",
    authDomain: "kisiler-51a08.firebaseapp.com",
    projectId: "kisiler-51a08",
    storageBucket: "kisiler-51a08.appspot.com",
    messagingSenderId: "808872507994",
    appId: "1:808872507994:web:09da2ea1e930d7f4e07663"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export default db;
  export {auth,provider}