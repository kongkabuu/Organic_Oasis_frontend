import React, { useState } from "react";
import image from "../assets/login-image.jpeg";
import "./Login.css";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false); // State to manage login form display
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
          {showLoginForm ? ( // Display login form when showLoginForm is true
            <>
              <h1>Welcome, login here</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password" // Change input type to "password" for password fields
                  placeholder="password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                <button className="login-button" type="submit">
                  Login in
                </button>
              </form>
            </>
          ) : (
            // Display login button when showLoginForm is false
            <button className="login-button" onClick={() => setShowLoginForm(true)}>
              Login
            </button>
          )}

          <div>
            <div className="login-google">
              {/* Your Google login button code here */}
            </div>
            <span className="login-link">
              register here{/* Your link to the SignUp component here */}
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
