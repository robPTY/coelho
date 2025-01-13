import React from "react";
import "./SignupPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainHeader from "components/MainHeader/MainHeader";

const SignupPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState("");
  const navigate = useNavigate();

  const submitUser = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    const result = await axios.post(
      "http://localhost:3001/create-user",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.status === 200) {
      setSubmitStatus("User added successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setSubmitStatus("Failed to add user.");
    }
  };

  return (
    <>
      <MainHeader />
      <div className="signupContainer">
        <div className="signupCard">
          <h1>Sign up today</h1>
          <p className="coelho">
            Get started with <span>coelho</span>. Fully free.
          </p>
          <p>
            Already have an account? <a>Log in here!</a>
          </p>
          <form onSubmit={submitUser}>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="signupButton">
              Sign up
            </button>
          </form>
          <div className="cardDivider">or</div>
          <button className="googleSignup">
            <img src="/icons/google_logo.png" alt="Google Logo" />
            Register with Google
          </button>
          <div
            className={`statusMessage ${
              submitStatus.includes("successfully") ? "success" : "error"
            }`}
          >
            {submitStatus && <p>{submitStatus}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
