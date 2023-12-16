import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../components/firebase/index.js";
import React, {useState} from "react";

//functions

const Login = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if ( !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Additional validation or sign-up logic can be added here

    alert("SIGN UP SUCCESS !");
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      navigate("/slide");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      alert("Google sign-in failed. Please try again.");
    }
  };

  return (
    <main>
      <div className="login-master">
        <h1 className="heading">Sign Up</h1>
        <div className="name">
          <h5 className="type">User Name</h5>
          <input
            className="bar-01"
            type="text"
            placeholder="Enter Your Name Here"
            // Assuming you have a username state as well
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="name">
          <h5 className="type">Password</h5>
          <input
            className="bar-01"
            type="password"
            placeholder="Enter Your Password Here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="name">
          <h5 className="type"> Confirm Password</h5>
          <input
            className="bar-01"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
