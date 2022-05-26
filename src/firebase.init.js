// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDENZKITrfFsEPgZu22KMkAz_BXC1hWM4",
  authDomain: "evediva-manufacturer.firebaseapp.com",
  projectId: "evediva-manufacturer",
  storageBucket: "evediva-manufacturer.appspot.com",
  messagingSenderId: "885200391514",
  appId: "1:885200391514:web:ca75a3a8df5a33162c7763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;