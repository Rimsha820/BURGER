import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Componets /Header';
import { useTheme } from '../Componets /ThemeContext'; // Import the theme context

// Keyframes for left and right animations
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components for the Contact page
const PageContainer = styled.div<{ isDarkTheme: boolean }>`
  width: 100vw;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const HeaderTitle = styled.h1`
  font-size: 2.8rem;
  color: white;
  font-weight: bold;
  margin-top: 130px;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const FormContainer = styled.div<{ isDarkTheme: boolean }>`
  flex: 1;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 180px;
  margin-top: 50px;
  animation: ${slideInRight} 1s ease-out;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffcc00;
  margin-bottom: 20px;
  margin-left: 139px;
  font-weight: bold;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #ffcc00;
  color: #001f3f;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 170px;
  width: 120px;
  margin-top: 10px;

  &:hover {
    background-color: #f9d337;
  }
`;

const ContactInfo = styled.div<{ isDarkTheme: boolean }>`
  flex: 1;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  animation: ${slideInLeft} 1s ease-out;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #ffcc00;
  margin-bottom: 15px;
  font-weight: bold;
`;

const ContactDetail = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
`;

const Contact: React.FC = () => {
  const { isDarkTheme } = useTheme(); // Use the theme context

  return (
    <PageContainer isDarkTheme={isDarkTheme}>
      <Header />
      <HeaderTitle>CONTACT US</HeaderTitle>

      <ContactContainer>
        <ContactInfo isDarkTheme={isDarkTheme}>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactDetail>Email: contact@foodwebsite.com</ContactDetail>
          <ContactDetail>Phone: (123) 456-7890</ContactDetail>
          <ContactDetail>Address: 123 Food Street, Flavor Town, FT 12345</ContactDetail>
        </ContactInfo>

        <FormContainer isDarkTheme={isDarkTheme}>
          <FormTitle>Get in Touch</FormTitle>
          <form>
            <FormField>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormInput type="email" id="email" name="email" />
            </FormField>
            <FormField>
              <FormLabel htmlFor="phone">Phone:</FormLabel>
              <FormInput type="tel" id="phone" name="phone" />
            </FormField>
            <FormField>
              <FormLabel htmlFor="address">Address:</FormLabel>
              <FormInput type="text" id="address" name="address" />
            </FormField>
            <FormField>
              <FormLabel htmlFor="message">Message:</FormLabel>
              <FormTextarea id="message" name="message"></FormTextarea>
            </FormField>
            <SubmitButton type="submit">Send</SubmitButton>
          </form>
        </FormContainer>
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
