import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    authDomain: process.env.GATSBY_FIREBASE_authDomain,
    databaseURL: process.env.GATSBY_FIREBASE_databaseURL,
    projectId: 'prismic-tut',
    storageBucket: process.env.GATSBY_FIREBASE_storageBucket,
    messagingSenderId: process.env.GATSBY_FIREBASE_messagingSenderId,
    appId: process.env.GATSBY_FIREBASE_appId
});

export { firebaseConfig as firebase };