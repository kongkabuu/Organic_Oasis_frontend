import { useState } from "react";
import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import { Avatar } from "@mui/material";

const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  background-color: #19c048;
  cursor: pointer;
  border: 2px solid #19c048; /* Add a border with the same color as the background */
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
  background-color: #19c048; /* Use the specified color code for the buttons */
  color: #fff; /* Set text color to white */
  &:hover {
    background-color: #05e086;
  }
`;

const CloseButton = styled(LoadingButton)`
  background-color: #19c048; /* Use the specified color code for the buttons */
  color: #fff; /* Set text color to white */
  margin-right: 10px;
  &:hover {
    background-color: #05e086;
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

  const handleEditProfileClick = () => {
    setIsEditing(true);
  };

  const handleAvatarClick = () => {
    setIsEditing(true);
  };

  return (
    <ProfileContainer>
      <ProfileAvatar onClick={handleAvatarClick} />{" "}
      {/* Render the Avatar component */}
      {isEditing && (
        <PopUpForm>
          <InputGroup>
            <label>First Name</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Last Name</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Phone Number</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Email</label>
            <input type="email" />
          </InputGroup>
          <InputGroup>
            <label>Location</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <input type="password" />
          </InputGroup>
          {/* Add other input fields as needed */}
          <div>
            <SubmitButton onClick={() => setIsEditing(false)}>
              Submit
            </SubmitButton>
            <CloseButton onClick={() => setIsEditing(false)}>Close</CloseButton>
          </div>
        </PopUpForm>
      )}
    </ProfileContainer>
  );
};

export default Profile;
