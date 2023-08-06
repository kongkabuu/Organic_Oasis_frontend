import React, { useState } from 'react';
import styled from 'styled-components';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Container, Grid, TextField, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';

const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  background-color: #19C048;
  cursor: pointer;
`;

const PopUpForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 100;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;

const SubmitButton = styled(LoadingButton)`
  background-color: #15B76C;
  &:hover {
    background-color: #05E086;
  }
`;

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const user = {
    firstname: "Lenny",
    lastname: "Ngetich",
    phonenumber: "0710200602",
    email: "lennyngetich4@gmail.com",
    password: "",
    password_confirmation: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: user?.firstname ? user.firstname : '',
      lastname: user?.lastname ? user.lastname : '',
      username: user?.username ? user.username : '',
      phonenumber: user?.phonenumber ? user.phonenumber : '',
      email: user?.email ? user.email : '',
      password: user?.password ? user.password : '',
      password_confirmation: user?.password_confirmation ? user.password_confirmation : '',
    },
    onSubmit: async (values) => {
      console.log(values);
      setIsEditing(false);
      try {
        const response = await fetch(`https://tuneflow-gpsc.onrender.com/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          // Update the user information on the frontend if needed
          // ...
          setIsEditing(false);
          console.log('Profile updated successfully!');
        } else {
          console.log('Failed to update profile.');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    },
  });

  const handleEditProfileClick = () => {
    setIsEditing(true);
  };

  const handleAvatarClick = () => {
    setIsEditing(true);
  };

  return (
    <ProfileContainer>
      <Container component="main" maxWidth="xs">
        {/* Rest of the code... */}
      </Container>

      {isEditing && (
        <PopUpForm>
          <InputGroup>
            <label>Full Name</label>
            <input type="text" />
          </InputGroup>
          {/* Add other input fields for Address, Phone number, Email, Item, Description, Quantity, Price, Shipping Cost, and Tax */}
          {/* ... (rest of the code) */}
          <div>
            <SubmitButton onClick={() => setIsEditing(false)}>Submit</SubmitButton>
            <SubmitButton onClick={() => setIsEditing(false)}>Close</SubmitButton>
          </div>
        </PopUpForm>
      )}
    </ProfileContainer>
  );
};

export default Profile;
