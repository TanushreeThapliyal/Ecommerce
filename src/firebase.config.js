

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDqE72DQHSZpKytrIcknnjouU-H5J1Ui4o",
  authDomain: "multimart-8ef14.firebaseapp.com",
  projectId: "multimart-8ef14",
  storageBucket: "multimart-8ef14.appspot.com",
  messagingSenderId: "456002440504",
  appId: "1:456002440504:web:c8322ff6239485463345cd",
  measurementId: "G-TXJ8P3L17C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app);



export default app;