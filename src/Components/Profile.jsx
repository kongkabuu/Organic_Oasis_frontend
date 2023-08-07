import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
// import { useHistory } from 'react-router-dom';


const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  background-color: #19C048;
  cursor: pointer;
  border: 2px solid #19C048; /* Add a border with the same color as the background */
`;

const Profile = () => {
  // const history = useHistory(); // Get the history object for navigation

  const handleAvatarClick = () => {
    // Navigate to the login page when avatar is clicked
    history.push('/login');
  };

  return (
    <ProfileContainer>
      <ProfileAvatar onClick={handleAvatarClick} /> {/* Render the Avatar component */}
    </ProfileContainer>
  );
};

export default Profile;
