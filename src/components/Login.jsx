import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import image from "../assets/login-image.jpeg";
import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <>
      <div className="container">
        <div className="login-details">
          <form>
            <input
              type="text"
              placeholder="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />

            <input
              type="text"
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
          </form>

          <div>
            <div className="login-google">
              <GoogleLogin
                onSuccess={(CredentialResponse) => {
                  console.log(CredentialResponse);
                }}
                onError={() => {
                  console.log("login failed");
                }}
                useOneTap
              />
            </div>

            <span className="login-link">
              register here<Link to="/sign-up">Register</Link>
            </span>
          </div>
        </div>

        <div className="login-img">
          <img src={image} alt=" cart icon" width="300px" height="598px" />
        </div>
      </div>
    </>
  );
}
