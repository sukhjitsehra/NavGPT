import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlXRV7zDd59vPHwJN7GmAN9s8suppsj3I",
    authDomain: "navigationapp-95308.firebaseapp.com",
    projectId: "navigationapp-95308",
    storageBucket: "navigationapp-95308.appspot.com",
    messagingSenderId: "426653518538",
    appId: "1:426653518538:web:a0474bf1a5a2528f1e4233",
    measurementId: "G-0CQF5QWM9G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
export default { firebase, firestore, auth };