import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Componets /Header';
import about from '../assets/about.jpg';
import { FaCheck } from 'react-icons/fa';
import { useTheme } from '../Componets /ThemeContext';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AboutContainer = styled.div<{ isDarkTheme: boolean }>`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  width: 100vw;
  padding: 20px;
`;
const HeaderTitle = styled.h1`
  font-size: 2.8rem;
  color: white;
  font-weight: bold;
  
  margin-bottom:150px;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const AboutImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-right: 100px;
  animation: ${slideInFromLeft} 1s ease-in-out;
`;

const AboutText = styled.div<{ isDarkTheme: boolean }>`
  text-align: left;
  max-width: 50%;
  margin-bottom: 20px;
  animation: ${slideInFromRight} 1s ease-in-out;
  
  h1 {
    margin-bottom: 20px;
    font-size: 2rem; 
    line-height: 1.4; 
    font-weight: 900;
    color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'white')};
  }

  p {
    color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'white')};
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  width: 100%;
  max-width: 400px;
  text-align: left;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  svg {
    color: yellow;
    margin-right: 10px;
  }
`;

const ButtonDiv = styled.div<{ isDarkTheme: boolean }>`
  width: 120px;
  height: 50px;
  margin-top: 40px;
  background-color: yellow;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : 'black')};
  border-radius: 25px;
  padding: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#001f3f' : 'black')};
    color: yellow;
    transform: scale(1.05);
  }
`;

const About: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <AboutContainer isDarkTheme={isDarkTheme}>
      <Header />
      <HeaderTitle>ABOUT US</HeaderTitle>
      <AboutContent>
        <AboutImage src={about} alt="About" />
        <AboutText isDarkTheme={isDarkTheme}>
          <h1>FIND FOOD AND DRINKS, ALL-IN-ONE <br /> PLACE FOR YOUR BEST TASTE.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum quod at voluptate<br/> dicta consequatur eos itaque, tenetur quas nesciunt doloribus, 
            vitae odit quae,<br/> porro beatae ullam modi hic facere.</p>
          <AdditionalInfo>
            <InfoItem><FaCheck /> Best Price</InfoItem>
            <InfoItem style={{ marginLeft: '40px' }}><FaCheck /> Fresh Ingredients</InfoItem>
            <InfoItem><FaCheck /> Best Services</InfoItem>
            <InfoItem style={{ marginLeft: '15px' }}><FaCheck /> Health Protocol</InfoItem>
          </AdditionalInfo>
          <ButtonDiv isDarkTheme={isDarkTheme}>About Us</ButtonDiv>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
