import { useState } from "react";
import image from "./Assets/login-image.jpeg";
import "./Login.css";
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role:"",
    password: "",
    password_confirmation: "",
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
    fetch("http://127.0.0.1:3000/register", {
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
          <h1>Register here</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={handleChange}
              name="username"
              value={formData.username}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
              <label htmlFor="role">Role:</label>
            <input
              type="text"
              placeholder="role"
              onChange={handleChange}
              name="role"
              value={formData.role}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            <label htmlFor="password_confirmation">
              Password confirmation:
            </label>
            <input
              type="text"
              placeholder="password"
              onChange={handleChange}
              name="password_confirmation"
              value={formData.password_co}
            />
            <button className="login-button">sign up</button>
          </form>
        </div>

        <div className="login-img">
          <img src={image} alt=" cart icon" width="300px" height="598px" />
        </div>
      </div>
    </>
  );
}
