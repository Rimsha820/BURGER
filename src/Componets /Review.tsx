import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Componets /Header';
import review1 from '../assets/review-1.jpg';
import review2 from '../assets/review-2.jpg';
import review3 from '../assets/review-3.jpg';
import review4 from '../assets/review-4.jpg';
import review5 from '../assets/review-5.jpg';
import review6 from '../assets/review-2.jpg';  
import { useTheme } from '../Componets /ThemeContext';

// Keyframes for slide-in animations
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled.div<{ isDarkTheme: boolean }>`
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 130vh;
  width: 99.2vw;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;

const Title = styled.h1<{ isDarkTheme: boolean }>`
  font-size: 2.4rem;
  margin-bottom: 10px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'white')};
  margin-top: 150px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 80px;
  }
`;

const Paragraph = styled.p<{ isDarkTheme: boolean }>`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  text-align: center;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'white')};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Card = styled.div<{ animationDirection: string; isDarkTheme: boolean }>`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#333' : '#003366')};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  height: 320px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ animationDirection }) =>
    animationDirection === 'left' ? slideInLeft : slideInRight} 0.8s ease-out both;

  @media (max-width: 768px) {
    height: auto;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardTitle = styled.h2<{ isDarkTheme: boolean }>`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'white')};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

const CardContent = styled.p<{ isDarkTheme: boolean }>`
  font-size: 1rem;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'white')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Review: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <PageContainer isDarkTheme={isDarkTheme}>
      <Header />
      <Title isDarkTheme={isDarkTheme}>CUSTOMER REVIEW</Title>
      <Paragraph isDarkTheme={isDarkTheme}>
        Hear what our customers have to say about their experiences. We strive to provide the best service and quality food.
      </Paragraph>
      <CardsContainer>
        <Card animationDirection="left" isDarkTheme={isDarkTheme}>
          <CardImage src={review1} alt="John Doe" />
          <CardContentContainer>
            <CardTitle isDarkTheme={isDarkTheme}>John Doe</CardTitle>
            <CardContent isDarkTheme={isDarkTheme}>
              The service was exceptional, and the food was delicious. I will definitely come back!
            </CardContent>
          </CardContentContainer>
        </Card>
        <Card animationDirection="right" isDarkTheme={isDarkTheme}>
          <CardImage src={review2} alt="Sophia Davis" />
          <CardContentContainer>
            <CardTitle isDarkTheme={isDarkTheme}>Jane Smith</CardTitle>
            <CardContent isDarkTheme={isDarkTheme}>
              The food was amazing, with a great variety of options to choose from.
            </CardContent>
          </CardContentContainer>
        </Card>
        <Card animationDirection="left" isDarkTheme={isDarkTheme}>
          <CardImage src={review3} alt="Emily Johnson" />
          <CardContentContainer>
            <CardTitle isDarkTheme={isDarkTheme}>Emily Johnson</CardTitle>
            <CardContent isDarkTheme={isDarkTheme}>
              The staff was very friendly and made the experience even better.
            </CardContent>
          </CardContentContainer>
        </Card>
        <Card animationDirection="right" isDarkTheme={isDarkTheme}>
          <CardImage src={review4} alt="Michael Brown" />
          <CardContentContainer>
            <CardTitle isDarkTheme={isDarkTheme}>Michael Brown</CardTitle>
            <CardContent isDarkTheme={isDarkTheme}>
              The ambiance was cozy and inviting, perfect for a relaxed meal.
            </CardContent>
          </CardContentContainer>
        </Card>
        <Card animationDirection="left" isDarkTheme={isDarkTheme}>
          <CardImage src={review5} alt="Jane Smith" />
          <CardContentContainer>
            <CardTitle isDarkTheme={isDarkTheme}>Sophia Davis</CardTitle>
            <CardContent isDarkTheme={isDarkTheme}>
              The coffee was excellent, perfectly brewed with rich flavors.
            </CardContent>
          </CardContentContainer>
        </Card>
        <Card animationDirection="right" isDarkTheme={isDarkTheme}>
          <CardImage src={review6} alt="James Wilson" />
          <CardContentContainer>
            <CardTitle isDarkTheme={isDarkTheme}>James Wilson</CardTitle>
            <CardContent isDarkTheme={isDarkTheme}>
              The service was quick and efficient, making it perfect for a busy day.
            </CardContent>
          </CardContentContainer>
        </Card>
      </CardsContainer>
    </PageContainer>
  );
};

export default Review;
