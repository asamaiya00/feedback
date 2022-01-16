import { getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const Header = () => {
  const auth = getAuth();
  const { loggedIn, checkingStatus } = useAuthStatus();
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    navigate("/sign-in");
  };
  if (checkingStatus) {
    return <h4>loading.....</h4>;
  }
  return (
    <header className="header">
      <Link to="/">
        <h4>Resource Hub</h4>
      </Link>

      {loggedIn ? (
        <h4 style={{ cursor: "pointer" }} onClick={logout}>
          Log out
        </h4>
      ) : (
        <div className="actions">
          <Link to="/sign-in">
            <h4>Sign In</h4>
          </Link>
          <Link to="/sign-up" id="signup">
            <h4>Sign Up</h4>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
