import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAadgQoWUGeHhRN8KEhOEaYiukCkGi9pEs",
  authDomain: "proyecto-ecommerce-90ef9.firebaseapp.com",
  projectId: "proyecto-ecommerce-90ef9",
  storageBucket: "proyecto-ecommerce-90ef9.appspot.com",
  messagingSenderId: "667983664705",
  appId: "1:667983664705:web:26c23d909fb9827c5958c0",
  measurementId: "G-K51YH5LVGQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
