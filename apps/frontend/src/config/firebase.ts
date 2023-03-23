// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDDxxDnUNMFhKFYFcnfZshbjO6BhNK3eMU',
  appId: '1:1083069107305:web:051142c7e2c9eb859a26f8',
  authDomain: 'spending-savvy.firebaseapp.com',
  measurementId: 'G-7BJN7F6ENL',
  messagingSenderId: '1083069107305',
  projectId: 'spending-savvy',
  storageBucket: 'spending-savvy.appspot.com',
};

// doc
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
