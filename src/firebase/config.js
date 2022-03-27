import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD77g3AunROvp60jn8xwbXpswohbGLUhmQ",
  authDomain: "chatapp-5898a.firebaseapp.com",
  databaseURL: "https://chatapp-5898a-default-rtdb.firebaseio.com",
  projectId: "chatapp-5898a",
  storageBucket: "chatapp-5898a.appspot.com",
  messagingSenderId: "278472364801",
  appId: "1:278472364801:web:ce372c8ba381710d0c0100",
  measurementId: "G-VB2TNS78C3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export { db, auth };