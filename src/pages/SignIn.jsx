import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) navigate("/");
    } catch (error) {
      toast.error("Check credentials");
    }
  };
  return (
    <>
      <form id="sign" onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleFormChange}
          minLength={4}
          maxLength={32}
          required
        />

        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleFormChange}
          minLength={6}
          maxLength={32}
          required
        />
        <button id="submit" type="submit">
          Sign In
        </button>
        <OAuth />
      </form>
    </>
  );
};

export default SignIn;
