
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkrAvA5_LuluefV5b9Mcik2C1pSXR7FWs",
    authDomain: "coderhouse-ecommerce-ca0da.firebaseapp.com",
    projectId: "coderhouse-ecommerce-ca0da",
    storageBucket: "coderhouse-ecommerce-ca0da.appspot.com",
    messagingSenderId: "167014072747",
    appId: "1:167014072747:web:79c59929238d27d02b92ee",
    measurementId: "G-8TMRXJ5RP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db