import firebase from "firebase/app"
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAIHlwKclvRsOntiycSYEnYTUfBcd9e4pU",
        authDomain: "admin-templade-cod3r.firebaseapp.com",
        projectId: "admin-templade-cod3r",
        storageBucket: "admin-templade-cod3r.appspot.com",
        messagingSenderId: "779790366386",
        appId: "1:779790366386:web:e15494c633596c733cbbab"
    })
}

export default firebase