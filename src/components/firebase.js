import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyARtSt-W9YENYdkSe-3okjGI6192j-J0I0",
    authDomain: "fb-bdreact01-5c82d.firebaseapp.com",
    projectId: "fb-bdreact01-5c82d",
    storageBucket: "fb-bdreact01-5c82d.appspot.com",
    messagingSenderId: "826697868382",
    appId: "1:826697868382:web:455194748e0eadaac740cf"
};

const fb = firebase.initializeApp(firebaseConfig);

export const bd = fb.firestore();

