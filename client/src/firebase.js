// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'findestate-67a08.firebaseapp.com',
  projectId: 'findestate-67a08',
  storageBucket: 'findestate-67a08.appspot.com',
  messagingSenderId: '205754384095',
  appId: '1:205754384095:web:ac80af9d72f3cef38cf36a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
