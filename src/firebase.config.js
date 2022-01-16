import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SQFr-MUK6vEDkxZm399uSKy17Uqm1Ow",
  authDomain: "resource-hub-e5f8f.firebaseapp.com",
  projectId: "resource-hub-e5f8f",
  storageBucket: "resource-hub-e5f8f.appspot.com",
  messagingSenderId: "283579305846",
  appId: "1:283579305846:web:bf986694460ea028433457",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore();
