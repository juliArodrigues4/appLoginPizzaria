import { initializeApp } from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyACGmYAL4GSB-_xpzPZNnVVwbEWsHCP7aU",
  authDomain: "pizzamariobdj.firebaseapp.com",
  projectId: "pizzamariobdj",
  storageBucket: "pizzamariobdj.appspot.com",
  messagingSenderId: "348931718858",
  appId: "1:348931718858:web:0b3da701ee6c459a1f7e33"
};

const app = initializeApp(firebaseConfig);

export default app;