

import React from 'react';
import styled from 'styled-components';

const StyledPayment = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  button {
    background-color: #ff5733;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #ff3e00;
  }
  p {
    margin: 0;
  }
`;

const PromoCode = styled.p`
  font-size: 14px;
  color: green;
  font-weight: bold;
`;

const TotalAmount = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;
`;

const Payment = () => {
  return (
    <StyledPayment>
      <h1>Payment</h1>
      <h2>Artcaffe Market</h2>
      <p>6 products from Artcaffe Market</p>

      <ProductContainer>
        <button>Remove</button>
        <p>1</p>
        <button>Add to your order</button>
        <p>Assorted Croissants 4Pc</p>
        <p>KES 1,020.00</p>
      </ProductContainer>

      <ProductContainer>
        <button>Remove</button>
        <p>5</p>
        <button>Add to your order</button>
        <p>Fresh Chicken Thighs Boneless 500G</p>
        <p>KES 2,890.00</p>
      </ProductContainer>

      <SectionTitle>Delivery details</SectionTitle>
      <p>Mpaka Road</p>

      <div>
        <h3>Address details missing</h3>
        <p>Sending to someone else?</p>
        <button>Add their details to help the courier</button>
      </div>

      <SectionTitle>Delivery Time</SectionTitle>
      <p>20-30 min</p>
      <p>As soon as possible</p>

      <SectionTitle>Schedule</SectionTitle>
      {/* Add a day and time selection component here */}

      <SectionTitle>Add your phone number</SectionTitle>
      {/* Add a phone number input field here */}

      <SectionTitle>Payment method</SectionTitle>
      {/* Add a payment method selection component here */}

      <PromoCode>ODKEG7GEOS6 - You'll get KSh250.00 off your order!</PromoCode>

      <SectionTitle>Summary</SectionTitle>
      <p>Products</p>
      <p>KSh3,910.00</p>
      <p>Delivery</p>
      <p>FREE</p>
      <p>Services</p>
      <p>KSh19.00</p>
      <p>Promo code</p>
      <p>-KSh250.00</p>
      <TotalAmount>TOTAL - KSh3,679.00</TotalAmount>

      <ConfirmButton>Confirm Payment</ConfirmButton>
    </StyledPayment>
  );
};

export default Payment;
