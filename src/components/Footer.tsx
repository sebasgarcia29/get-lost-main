// components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Get lost</p>
    </FooterWrapper>
  );
};

export default Footer;