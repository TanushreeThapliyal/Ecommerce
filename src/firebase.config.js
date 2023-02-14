

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



 const firebaseConfig = {
  apiKey: "AIzaSyBN9_twGH5PrQXbBF0cK6czCItc4f2jrW8",
  authDomain: "multimart-e969c.firebaseapp.com",
  projectId: "multimart-e969c",
  storageBucket: "multimart-e969c.appspot.com",
  messagingSenderId: "498505295325",
  appId: "1:498505295325:web:cf78b5293a13ebc2ff8234",
  measurementId: "G-Q3D5X2J76R"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app);



export default app;