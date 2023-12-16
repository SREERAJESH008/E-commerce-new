import "./login.css";
import {useNavigate, Link}from "react-router-dom"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../components/firebase/index.js";

//functions

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    navigate("/slide");
  };

    const handleSignUp = () => {
      // Add your sign-up logic here
      alert("SIGN UP SECCESS !");
      
    };

    


  return (
    <main>
      <div className="login-master">
        <h1 className="heading">Sign Up</h1>
        <div className="name">
          <h5 className="type">User Name</h5>
          <input type="text" placeholder="Enter Your Name Here" />
        </div>
        <div className="name">
          <h5 className="type">Password</h5>
          <input type="password" placeholder="Enter Your Password Here" />
        </div>
        <div className="name">
          <h5 className="type"> Confirm Password</h5>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="bhai">
          <button onClick={handleSignUp} className="button-0">
            Sign Up
          </button>
          <button onClick={signInWithGoogle} className="button-4">
            Sign Up With Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;

// ... (your existing imports)

// // ... (your existing code)


// // firebase/index.js

// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   // Your Firebase configuration
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signInWithGooglePopup = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   return result;
// };

// const createUserDocumentFromAuth = async (user) => {
//   const userDocRef = doc(db, 'users', user.uid);
//   // Your logic to create a user document in Firestore
//   return userDocRef;
// };

// export { signInWithGooglePopup, createUserDocumentFromAuth, auth, db };



// const Login = () => {
//   const navigate = useNavigate();

//   const handleSignUp = () => {
//     // Add your sign-up logic here
//     alert("Sign up logic goes here!");
//   };

//   const signInWithGoogle = async (event) => {
//     event.preventDefault();
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//     navigate("/slide");
//   };


//   return (
//     <main>
//       <div className="login-master">
//         <h1 className="heading">Sign Up</h1>
//         <div className="name">
//           <h5 className="type">User Name</h5>
//           <input type="text" placeholder="Enter Your Name Here" />
//         </div>
//         <div className="name">
//           <h5 className="type">Password</h5>
//           <input type="password" placeholder="Enter Your Password Here" />
//         </div>
//         <div className="bhai">
//           <button onClick={handleSignUp} className="button-0">
//             Sign Up
//           </button>
//           <button onClick={signInWithGoogle} className="button-4">
//             Sign Up With Google
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Login;

