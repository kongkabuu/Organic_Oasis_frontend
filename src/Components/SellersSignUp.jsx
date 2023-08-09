import React, { useState, useContext } from 'react';
import image from '../assets/login-image.jpeg';
import './SellersLogin.css';
import { AuthContext } from './AuthContext';

export default function SignUp() {
  const { isLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://127.0.0.1:3000/sellers/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <div className="container">
          <div className="login-details">
            <h1>Register as a Seller here</h1>
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
                placeholder="Enter your Username"
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
                placeholder="password confirmation"
                onChange={handleChange}
                name="password_confirmation"
                value={formData.password_confirmation}
              />
              <button className="login-button">Sign up</button>
            </form>
          </div>

          <div className="login-img">
            <img src={image} alt=" cart icon" width="300px" height="598px" />
          </div>
        </div>
      )}
    </div>
  );
}
