import {initializeApp} from "firebase/app"
import {getAuth, signInWithPopup, GoogleAuthProvider, User} from "firebase/auth"

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
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
        })
  };

//   export async function signInWithGoogle():Promise<User> {
//     const googleUser = await signInWithPopup(auth, authProvider);
//     return googleUser.user
//   }

  export function signOut(): void {
    auth.signOut()
  }