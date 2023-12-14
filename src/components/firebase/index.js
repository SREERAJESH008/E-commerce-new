// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAZRnkZ23_HSsGDgZxLsGyykj6xS6a5ufA",
  authDomain: "e-commerce-cb178.firebaseapp.com",
  projectId: "e-commerce-cb178",
  storageBucket: "e-commerce-cb178.appspot.com",
  messagingSenderId: "504266928605",
  appId: "1:504266928605:web:960a6f1245bb86052b4634",
};

// Initialize Firebase
const CommerceApp = initializeApp(firebaseConfig);
// Authentication
const CommerceAuth = getAuth(CommerceApp);
// Sign in with google
const googleProvider = new GoogleAuthProvider();
const signInWithGooglePopup = () =>
  signInWithPopup(CommerceAuth, googleProvider);
// firestore database
const CommerceDb = getFirestore(CommerceApp);

const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userDocRef = doc(CommerceDb, "users", userAuth.uid);
  console.log(userDocRef);
  // const userSnapShot = await getDoc(userAuth);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  return userDocRef;
};

export { signInWithGooglePopup, createUserDocumentFromAuth };
