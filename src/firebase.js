import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApsp5EbQfkIhUlSgVuEOUEqrh1RAgyyqs",
  authDomain: "netflix-clone-dope.firebaseapp.com",
  projectId: "netflix-clone-dope",
  storageBucket: "netflix-clone-dope.appspot.com",
  messagingSenderId: "951323280077",
  appId: "1:951323280077:web:b384c7c0f6aa6f669d1f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth };
export default db;
 