import React, { useState } from 'react';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormContent = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the login using the fetch request
    fetch('http://127.0.0.1:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        console.error('Error:', error);
      });
  };

  return (
    <LoginFormContainer>
      <LoginFormContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Login</h2>
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
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <button className="login-button">Login</button>
        </form>
      </LoginFormContent>
    </LoginFormContainer>
  );
};

export default LoginForm;
