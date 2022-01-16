import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../images/google.svg";

const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Can't login with Google");
    }
  };
  return (
    <div className="oauth-container">
      <span>Sign {location.pathname === "/sign-in" ? "In" : "Up"} with </span>
      <img
        onClick={onGoogleClick}
        style={{ marginLeft: "0.5rem", cursor: "pointer" }}
        width={40}
        src={googleIcon}
        alt="Google OAuth"
      />
    </div>
  );
};

export default OAuth;
