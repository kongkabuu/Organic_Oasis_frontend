import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #19c048;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const Column = styled.div``;

const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #19c048;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #14a340;
  }
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: #fff; /* Change the color to white */
  text-decoration: none;
  font-size: 1.8rem ;
  margin-right: 1rem;
  transition: color 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #14a340;
  }
`;

const Emoji = styled.span`
  font-size: 1.2rem;
`;

const EmailSection = styled.div`
  display: flex;
  align-items: center;
`;

const EmailInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #19c048;
  color: #19c048;
  padding: 0.5rem;
  margin-left: 1rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const SubscribeButton = styled.button`
  background-color: #19c048;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Heading>Organic Oasis</Heading>
          <Text>Email: contact@oasis.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
          <Text>Address: 254 Main , Nairobi, Kenya</Text>
        </Column>
        <Column>
          <Heading>Follow Us</Heading>
          <SocialIcons>
            {/* Use the specified icons from MUI */}
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            {/* Replace the Twitter icon with an "X" icon */}
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTimes} />
            </SocialIcon>
          </SocialIcons>
        </Column>
        <Column>
          <Heading>Express dispatches</Heading>
          <Text>Subscribe for latest Offers & Discounts.</Text>
          <EmailSection>
            <EmailInput type="email" placeholder="Your Email Address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </EmailSection>
        </Column>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
