import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: #19C048;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 Organic Oasis - All rights reserved</FooterText>
      <FooterText>123 Organic Street, Green City</FooterText>
      <FooterText>Email: info@organicoasis.com | Phone: +1 (555) 123-4567</FooterText>
    </FooterContainer>
  );
};

export default Footer;
