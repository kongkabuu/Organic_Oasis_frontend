import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
import image from "./Assets/login-image.jpeg";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Perform the login using the fetch request
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here, such as setting authentication state
        console.log(data);
        localStorage.setItem("loggedInUser", JSON.stringify(data));
          navigate("/")

      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      });
  }
  return (
    <>
      <div className="container">
        <div className="login-details">
          <h1>Welcome, Login here</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
             <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={handleChange}
              name="username"
              value={formData.username}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            <button className="login-button">Login in</button>
          </form>

          <div>
            <div className="login-google">
              {/* <GoogleLogin
                onSuccess={(CredentialResponse) => {
                  console.log(CredentialResponse);
                }}
                onError={() => {
                  console.log("login failed");
                }}
                useOneTap
              /> */}
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
