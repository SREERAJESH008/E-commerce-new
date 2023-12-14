import "./login.css";
import {useNavigate, Link}from "react-router-dom"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../components/firebase/index.js";

//functions

const Login = () => {
  const navigate = useNavigate ();
  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    navigate ("/slide")
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
        <div className="bhai">
          <button className="button-0">Sign Up</button>
          <button onClick={signInWithGoogle} className="button-4">
            Sign Up With Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
