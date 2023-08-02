import { useState } from 'react';
import styled from 'styled-components';

const AvatarImage = styled.img`
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: ${props => (props.showForm ? 'block' : 'none')};
`;

const Form = styled.form`
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 8px 15px;
  background-color: #19C048;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Profile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAvatarClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // You can use the form data (name, location, email, phone number) to update the buyer's profile
    // For example, you can use an API call to update the user's profile information on the server
  };

  return (
    <div>
      <AvatarImage
        src="path_to_your_avatar_image.jpg"
        alt="Buyer Avatar"
        onClick={handleAvatarClick}
      />
      <FormContainer showForm={showForm}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="location">Location:</Label>
            <Input type="text" id="location" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone Number:</Label>
            <Input type="tel" id="phone" required />
          </FormGroup>
          {/* Add more fields or any other information you want to include in the form */}
          <SubmitButton type="submit">Save</SubmitButton>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Profile;
