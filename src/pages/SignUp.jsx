import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const { name, email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Please enter valid data");
    }
  };
  return (
    <>
      <form id="sign" onSubmit={onSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleFormChange}
          minLength={4}
          maxLength={32}
          required
        />

        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleFormChange}
          minLength={4}
          maxLength={32}
          required
        />

        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleFormChange}
          minLength={6}
          maxLength={32}
          required
        />
        <button id="submit" type="submit">
          Sign Up
        </button>
        <OAuth />
      </form>
    </>
  );
};

export default SignUp;
