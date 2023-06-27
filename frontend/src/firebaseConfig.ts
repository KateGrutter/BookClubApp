import {initializeApp} from "firebase/app"
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA4fT_QEop1nENLFFUmAzPgmy8lJGxSEiU",
    authDomain: "bookclubapp-41e2d.firebaseapp.com",
    projectId: "bookclubapp-41e2d",
    storageBucket: "bookclubapp-41e2d.appspot.com",
    messagingSenderId: "398920128490",
    appId: "1:398920128490:web:fdbf2e3ad147f951a18493",
    measurementId: "G-C12T1QCLFC"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  const authProvider = new GoogleAuthProvider();

  export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider)
  };

  export function signOut(): void {
    auth.signOut()
  }