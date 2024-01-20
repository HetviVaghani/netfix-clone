import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4PQSOBJqTVtMbayZ7Sgy31FPlM32QJKg",
  authDomain: "react-netflix-clone-f4bc6.firebaseapp.com",
  projectId: "react-netflix-clone-f4bc6",
  storageBucket: "react-netflix-clone-f4bc6.appspot.com",
  messagingSenderId: "383695762009",
  appId: "1:383695762009:web:fa945a813748c8c84e3748",
  measurementId: "G-VMCNRW2YGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);