import { useState } from "react";

const SignIn = () => {
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
  return (
    <>
      <form id="sign">
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
      </form>
    </>
  );
};

export default SignIn;
