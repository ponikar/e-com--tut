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
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// show the google popup
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;

// regiser user 
export const makeUserRegisterDocument = async (authObject, addtionalData) => {
    if(authObject !== null) {
        const { uid, displayName, email } = authObject;
        const userRef = firestore.doc(`users/${uid}`);
        const snapshot = await userRef.get();
        if(!snapshot.exists) { // check the user is exist or not
            // make new User
            try {
                const created_at = new Date();
                await userRef.set({
                    displayName,
                    created_at,
                    email,
                    ...addtionalData
                });
            } catch(e) {
                console.log("Opps, error" , e);
            }

        }
        return userRef; // return that user object
    }
}

export const addCollectionDocumentToFirebase = async (collectionKey, collectionObj) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch(); // atomic opreation;

    /// store the data to firestore 
    collectionObj.forEach(obj => {
        const newDocRef = collectionRef.doc(); // creating new document
        batch.set(newDocRef, obj);
       
    });

   return await batch.commit(); // if the data has been uploaded then commit the changes
}


export const convertCollectionsSnapShotToMap = collection => {
    const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumlator,collection) => {
        accumlator[collection.title.toLowerCase()] = collection;
        return accumlator;
    },{});
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}