import React, { useState } from 'react';
import styled from 'styled-components';
import wImage from './Assets/w.jpg';
import gImage from './Assets/g.jpeg';
import bImage from './Assets/b.jpg';

const SellersContainer = styled.div`
  position: relative;
`;

const CustomShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

const CustomSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(163% + 1.3px);
  height: 600px;
`;

const ShapeFillPath = styled.path`
  fill: #D6F6D5; /* Updated to mild light green */
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
`;

const Circle = styled.div`
  width: 7.5cm;
  height: 6.5cm;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0 4.5cm;

  /* Add styles for the image inside the circle */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const CircleText = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  font-weight: bold;
  color: #333;
  font-size: 1.2rem;
`;

const PartnerButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem 1rem;
  background-color: #19C048;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
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
    npm install react styled-components @mui/lab @mui/material formik

    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #19C048c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
`;

const CloseButton = styled(SubmitButton)`
  background-color: #19C048;
  margin-right: 10px;
`;

const Sellers = () => {
  const [showForm, setShowForm] = useState(false);

  const handlePartnerClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <SellersContainer>
      {/* Your Sellers content goes here */}
      <CustomShapeDivider className="custom-shape-divider-bottom-1691053261">
        <CustomSVG
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <ShapeFillPath d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></ShapeFillPath>
        </CustomSVG>
      </CustomShapeDivider>
      <CirclesContainer>
        <Circle>
          <img src={wImage} alt="Circle 1" />
          <CircleText>Farm For Us</CircleText>
        </Circle>
        <Circle>
          <img src={gImage} alt="Circle 2" />
          <CircleText>Prepare For Us</CircleText>
        </Circle>
        <Circle>
          <img src={bImage} alt="Circle 3" />
          <CircleText>Deliver For Us</CircleText>
        </Circle>
      </CirclesContainer>
      <PartnerButton onClick={handlePartnerClick}>Partner with us</PartnerButton>
      {showForm && (
        <PopUpForm>
          <InputGroup>
            <label>Full Name</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Address</label>
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
            <label>Item</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Description</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Quantity</label>
            <input type="number" />
          </InputGroup>
          <InputGroup>
            <label>Price</label>
            <input type="number" />
          </InputGroup>
          <InputGroup>
            <label>Shipping Cost</label>
            <input type="number" />
          </InputGroup>
          <InputGroup>
            <label>Tax</label>
            <input type="number" />
          </InputGroup>
          <div>
            <SubmitButton onClick={handleCloseForm}>Submit</SubmitButton>
            <CloseButton onClick={handleCloseForm}>Close</CloseButton>
          </div>
        </PopUpForm>
      )}
    </SellersContainer>
  );
};

export default Sellers;
