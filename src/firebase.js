import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    authDomain: process.env.GATSBY_FIREBASE_authDomain,
    databaseURL: process.env.GATSBY_FIREBASE_databaseURL,
    projectId: process.env.GATSBY_FIREBASE_projectId,
    storageBucket: process.env.GATSBY_FIREBASE_storageBucket,
    messagingSenderId: process.env.GATSBY_FIREBASE_messagingSenderId,
    appId: process.env.GATSBY_FIREBASE_appId
});

export { firebaseConfig as firebase };