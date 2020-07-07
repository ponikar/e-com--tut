import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDCZhAHSNbAb8SqZzsH4cRpVfE8vP65Elo",
    authDomain: "e-com-48a45.firebaseapp.com",
    databaseURL: "https://e-com-48a45.firebaseio.com",
    projectId: "e-com-48a45",
    storageBucket: "e-com-48a45.appspot.com",
    messagingSenderId: "1037640311560",
    appId: "1:1037640311560:web:3bf6f38aaac18340c8c2bd",
    measurementId: "G-5VVZXRREC2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// make provider 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// show the google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;