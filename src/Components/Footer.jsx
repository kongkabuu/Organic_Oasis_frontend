import React from 'react';
import styled from 'styled-components';

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
  color: #19c048;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 1rem;
  transition: color 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #14a340;
  }
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Heading>Contact Us</Heading>
          <Text>Email: contact@example.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
          <Text>Address: 123 Main St, City, Country</Text>
        </Column>
        <Column>
          <Heading>Follow Us</Heading>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></SocialIcon>
          </SocialIcons>
        </Column>
        <Column>
          <Heading>Newsletter</Heading>
          <Text>Subscribe to our newsletter for the latest updates and offers.</Text>
          <EmailSection>
            <EmailInput type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </EmailSection>
        </Column>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
