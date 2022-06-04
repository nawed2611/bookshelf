import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDEhJcfTm3gdgRmY4xW2E4lh1QqvXrZeKE",
  authDomain: "bookshelf-3d874.firebaseapp.com",
  projectId: "bookshelf-3d874",
  storageBucket: "bookshelf-3d874.appspot.com",
  messagingSenderId: "903512058582",
  appId: "1:903512058582:web:db91ad2063ad61d826b777",
  measurementId: "G-0VJK9G0TP3"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp;
let auth = getAuth();

export default function useAuth(setStatus) {
  let navigation = useNavigate();

  async function SignIn() {
    let Google = new GoogleAuthProvider();
    
    await signInWithPopup(auth, Google)
      .then((res) => {
        setStatus("Success");

        navigation(`/dashboard`);
      })
      .catch((res) => {
        setStatus("Error");
      });
  }

  return {
    google: SignIn
  };
}
