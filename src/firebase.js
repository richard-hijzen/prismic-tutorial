import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDmyjeV9hY90u3V8OfdOQQpqsePXcSWfuk",
    authDomain: "prismic-tut.firebaseapp.com",
    databaseURL: "https://prismic-tut.firebaseio.com",
    projectId: "prismic-tut",
    storageBucket: "",
    messagingSenderId: "1011699914600",
    appId: "1:1011699914600:web:c9b6bb61d96dfe462928dd"
});

export { firebaseConfig as firebase };