
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD7JrEJJIvEYKh8up0AlPFQJB19_jKyMBw",
  authDomain: "logverse-blogging.firebaseapp.com",
  projectId: "logverse-blogging",
  storageBucket: "logverse-blogging.firebasestorage.app",
  messagingSenderId: "1095764579536",
  appId: "1:1095764579536:web:db8e5323e8ed3785bebad5"
};


const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to authenticate with Google");
    }
};
