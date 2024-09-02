import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ImSpoonKnife } from 'react-icons/im';
import { BsDropletFill } from 'react-icons/bs';
import { SiCodefresh } from 'react-icons/si';
import { useTheme } from '../Componets /ThemeContext'; 
import home from '../assets/home.png';
import burger3 from '../assets/burger-3.png';
import snack1 from '../assets/snack-1.png';
import bevrage2 from '../assets/beverage-2.png';
import promo1 from '../assets/promo-1.png'; 
import promo2 from '../assets/promo-2.png'; 
import Header from './Header'; 

// Keyframes for animations
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
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

const HomePageWrapper = styled.div<{ isDarkTheme: boolean }>`
  background-color: ${props => props.isDarkTheme ? 'black' : '#001f3f'};
  height: 180vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  color: ${props => props.isDarkTheme ? 'white' : 'white'};
  position: relative;
  width: 99.2vw;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 480px;
  height: 700px;
  background-image: url(${home});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 250px;
  animation: ${float} 1.5s ease-in-out infinite;
  margin-top: 110px;
`;

const Content = styled.div`
  text-align: center;
  margin-right: 260px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 20px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const ButtonDiv = styled.div<{ isDarkTheme: boolean }>`
  width: 140px;
  height: 50px;
  margin-top: 40px;
  background-color: ${props => props.isDarkTheme ? 'yellow' : 'yellow'};
  color: ${props => props.isDarkTheme ? 'black' : 'black'};
  border-radius: 20px;
  padding: 14px;
  margin-left: 210px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isDarkTheme ? '#001f3f' : 'yellow'};
    color: ${props => props.isDarkTheme ? 'yellow' : 'black'};
    transform: scale(1.05);
  }
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  span {
    margin-top: 8px;
    font-size: 1.2rem;
  }
`;

// Cards Section
const CardsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 100px;
  width: 100%;
  height: auto;
`;

const Card = styled.div<{ bgColor: string; isDarkTheme: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.isDarkTheme ? 'white' : '#333'};
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  animation: ${slideInLeft} ;

  h2 {
    margin-bottom: 10px;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 15px;
  }

  p {
    margin-bottom: 15px;
    margin-left: 15px;
  }

  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    color: black;
    margin-left: 15px;
    &:hover {
      color: #001f3f;
    }
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 8px;
  margin-top: 49px;
`;

const PromoCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 100px;
  width: 100%;
`;

const Cards = styled.div<{ bgColor: string; isDarkTheme: boolean }>`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.isDarkTheme ? 'white' : '#333'};
  border-radius: 10px;
  padding: 20px;
  width: 650px;
  height: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  animation: ${slideInRight} ;

  h2 {
    margin-bottom: 10px;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 15px;
  }

  p {
    margin-bottom: 15px;
    margin-left: 15px;
    color: white;
  }

  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    color: yellow;
    margin-left: 15px;
    &:hover {
      color: #001f3f;
    }
  }
`;

const CardImages = styled.img`
  width: 220px;
  height: 220px;
  margin-right: 20px;
  border-radius: 8px;
  margin-top: 45px;
`;

const HomePage: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <HomePageWrapper isDarkTheme={isDarkTheme}>
      <Header /> 
      
      {/* Main Content Section with Image and Text */}
      <MainContent>
        <ImageContainer />
        <Content>
          <Title>HAPPY TUMMY WITH <br /> TASTY BURGERS</Title>
          <IconsContainer>
            <IconItem>
              <ImSpoonKnife size="2rem" color="yellow" />
              <span>Delicious</span>
            </IconItem>
            <IconItem>
              <BsDropletFill size="2rem" color="yellow" />
              <span>Fresh</span>
            </IconItem>
            <IconItem>
              <SiCodefresh size="2rem" color="yellow" />
              <span>Organic</span>
            </IconItem>
          </IconsContainer>
          <ButtonDiv isDarkTheme={isDarkTheme}>Learn more</ButtonDiv>
        </Content>
      </MainContent>

      {/* Cards Section */}
      <CardsSection>
        <Card bgColor="#E0DA20" isDarkTheme={isDarkTheme}>
          <CardImage src={burger3} alt="Favicon Image" />
          <div>
            <h2>FOOD</h2>
            <p>Lorem ipsum dolor sit.</p>
            <span>Buy Online</span>
          </div>
        </Card>
        <Card bgColor="#D43422" isDarkTheme={isDarkTheme}>
          <CardImage src={snack1} alt="Snack Image" />
          <div>
            <h2>FOOD</h2>
            <p>Lorem ipsum dolor sit.</p>
            <span>Buy Online</span>
          </div>
        </Card>
        <Card bgColor="#28B639" isDarkTheme={isDarkTheme}>
          <CardImage src={bevrage2} alt="Beverage Image" />
          <div>
            <h2>FOOD</h2>
            <p>Lorem ipsum dolor sit.</p>
            <span>Buy Online</span>
          </div>
        </Card>
      </CardsSection>

      <PromoCards>
        {/* New Card 1 */}
        <Cards bgColor="#003366" isDarkTheme={isDarkTheme}>
          <div>
            <h2>GET A 20% DISCOUNT ON PAY-PAID WEEK</h2>
            <p>Lorem ipsum dolor sit. Lorem ipsum error quae maxime eius mollitia eos sit animi?</p>
            <span>Buy Online</span>
          </div>
          <CardImages src={promo1} alt="Dessert Image" />
        </Cards>
        {/* New Card 2 */}
        <Cards bgColor="#003366" isDarkTheme={isDarkTheme}>
          <div>
            <h2>GET A 20% DISCOUNT ON PAY-PAID WEEK </h2>
            <p>Lorem ipsum dolor sit. Lorem ipsum error quae maxime eius mollitia eos sit animi?</p>
            <span>Buy Online</span>
          </div>
          <CardImages src={promo2} alt="Salad Image" />
        </Cards>
      </PromoCards>
    </HomePageWrapper>
  );
};

export default HomePage;
