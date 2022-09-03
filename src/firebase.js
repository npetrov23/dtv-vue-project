import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


let config = {
    apiKey: "AIzaSyCzCe3jMZ4GxFpSiG4D8DOnSlRiWv7qQeQ",
    authDomain: "dtv-db.firebaseapp.com",
    projectId: "dtv-db",
    storageBucket: "dtv-db.appspot.com",
    messagingSenderId: "978626359539",
    appId: "1:978626359539:web:6d3065af857def3daa0786"
};

export default firebase.initializeApp(config).firestore();