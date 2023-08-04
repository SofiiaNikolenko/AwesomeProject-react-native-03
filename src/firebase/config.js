import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1eyV-fwXdUbLXqHd8qKYV0l3p64foUqw",
  authDomain: "nikolenko-awesome-project.firebaseapp.com",
  projectId: "nikolenko-awesome-project",
  storageBucket: "nikolenko-awesome-project.appspot.com",
  messagingSenderId: "762322231809",
  appId: "1:762322231809:android:6dfced31880dbe5c379600",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
