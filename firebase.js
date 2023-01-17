// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYQser3IUdbOTNb7AHVqW-FA7SGosa7Us",
  authDomain: "netflix-clone-rn-5e741.firebaseapp.com",
  projectId: "netflix-clone-rn-5e741",
  storageBucket: "netflix-clone-rn-5e741.appspot.com",
  messagingSenderId: "1061921598113",
  appId: "1:1061921598113:web:e7b6bbb41f094272375ee0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
