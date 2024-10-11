// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSqifAo222t1WzE7jFqzcFLuOh2bVwbSY",
    authDomain: "facebook-clone-939be.firebaseapp.com",
    projectId: "facebook-clone-939be",
    storageBucket: "facebook-clone-939be.appspot.com",
    messagingSenderId: "671026118350",
    appId: "1:671026118350:web:4d9dd199c0df0c7a459a9f"
};

// Initialize Firebase (check if the app is already initialized)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
