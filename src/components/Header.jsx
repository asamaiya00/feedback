import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h4>Resource Hub</h4>
      </Link>

      <div className="actions">
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up" id="signup">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
