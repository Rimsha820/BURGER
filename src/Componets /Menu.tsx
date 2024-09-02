import React, { useState } from 'react';
import Header from '../Componets /Header';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../Componets /ThemeContext';
import burger from '../assets/burger-1.png';
import burger2 from '../assets/burger-2.png';
import burger3 from '../assets/burger-3.png';
import burger4 from '../assets/burger-4.png';
import burger5 from '../assets/burger-5.png';
import snack1 from '../assets/snack-1.png';
import snack2 from '../assets/snack-2.png';
import snack3 from '../assets/snack-3.png';
import snack4 from '../assets/snack-4.png';
import snack5 from '../assets/snack-5.png';
import snack6 from '../assets/snack-6.png';
import beverage1 from '../assets/beverage-1.png';
import beverage2 from '../assets/beverage-2.png';
import beverage3 from '../assets/beverage-3.png';
import beverage4 from '../assets/beverage-4.png';
import beverage5 from '../assets/beverage-5.png';

const cardData = [
  { description: 'REGULAR BEEF BURGER', price: '$12.99', image: burger, category: 'Food' },
  { description: 'CHEESE BURGER', price: '$8.99', image: burger2, category: 'Food' },
  { description: 'VEGGIE BURGER', price: '$15.99', image: burger3, category: 'Food' },
  { description: 'DOUBLE BEEF BURGER', price: '$18.99', image: burger4, category: 'Food' },
  { description: 'DELICIOUS AND SAVORY.', price: '$12.99', image: burger5, category: 'Food' },
  { description: 'FRENCH FRIES.', price: '$8.99', image: snack1, category: 'Snack' },
  { description: 'Rich and flavorful.', price: '$15.99', image: snack2, category: 'Snack' },
  { description: 'FRENCH FRIES.', price: '$12.99', image: snack3, category: 'Snack' },
  { description: 'SPICY LAYS.', price: '$8.99', image: snack4, category: 'Snack' },
  { description: 'HAMBURGER.', price: '$15.99', image: snack5, category: 'Snack' },
  { description: 'Delicious and savory.', price: '$12.99', image: snack6, category: 'Snack' },
  { description: 'Sweet and tangy.', price: '$8.99', image: beverage1, category: 'Beverage' },
  { description: 'Rich and flavorful.', price: '$15.99', image: beverage2, category: 'Beverage' },
  { description: 'Delicious and savory.', price: '$12.99', image: beverage3, category: 'Beverage' },
  { description: 'Sweet and tangy.', price: '$8.99', image: beverage4, category: 'Beverage' },
  { description: 'Rich and flavorful.', price: '$15.99', image: beverage5, category: 'Beverage' },
];

const PageContainer = styled.div<{ isDarkTheme: boolean }>`
  height: 200vh;
  width: 99.2vw;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  margin-top: 70px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 20px;
  font-weight: 900;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 45px;
  cursor: pointer;
  width: 120px;
  height: 55px;
  font-weight: bold;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  margin: 0 auto;
  padding: 20px;
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(odd) {
    animation: ${slideInLeft} 0.8s ease-out forwards;
  }

  &:nth-child(even) {
    animation: ${slideInRight} 0.8s ease-out forwards;
  }
`;

const Card = styled.div<{ isDarkTheme: boolean }>`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#333' : '#003366')};
  color: black;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 270px;
  height: 220px;
`;

const CardImage = styled.img`
  width: 130px;
  height: 120px;
  margin-left: 50px;
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: white;
  font-weight: bold;
`;

const CardPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: yellow;
  margin-top: 5px;
`;

const Menu: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [filter, setFilter] = useState<string>('All');

  const filteredCardData = filter === 'All'
    ? cardData
    : cardData.filter(item => item.category === filter);

  return (
    <PageContainer isDarkTheme={isDarkTheme}>
      <Header />
      <MenuContainer>
        <Title>OUR BEST MENU</Title>
        <Paragraph>
          Discover our delicious range of food and beverages. Whether you're craving a quick snack or a full meal, we have something for everyone.
        </Paragraph>
        <ButtonContainer>
          <Button onClick={() => setFilter('All')}>All</Button>
          <Button onClick={() => setFilter('Food')}>Food</Button>
          <Button onClick={() => setFilter('Snack')}>Snack</Button>
          <Button onClick={() => setFilter('Beverage')}>Beverage</Button>
        </ButtonContainer>
        <CardsContainer>
          {filteredCardData.map((item, index) => (
            <CardWrapper key={index}>
              <Card isDarkTheme={isDarkTheme}>
                {item.image && <CardImage src={item.image} alt={`Image of ${item.description}`} />}
              </Card>
              <CardDescription>{item.description}</CardDescription>
              <CardPrice>{item.price}</CardPrice>
            </CardWrapper>
          ))}
        </CardsContainer>
      </MenuContainer>
    </PageContainer>
  );
};

export default Menu;
