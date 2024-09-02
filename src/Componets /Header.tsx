import React from 'react';
import styled from 'styled-components';
import { IoMoonOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const HeaderWrapper = styled.header<{ isDarkTheme: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : '#001f3f')};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const HeaderHeading = styled.h1<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : '#ffffff')};
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 120px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 0;
    margin-top: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 20px;
  margin-right: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-right: 0;
    margin-top: 15px;
  }
`;

const NavLink = styled(RouterNavLink)<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : '#ffffff')};
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: yellow;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ThemeIconWrapper = styled.div`
  cursor: pointer;
`;

const Header: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <HeaderWrapper isDarkTheme={isDarkTheme}>
      <HeaderHeading isDarkTheme={isDarkTheme}>
        BUR<span style={{ color: 'yellow' }}>GER</span>
      </HeaderHeading>
      <Nav>
        <NavLink isDarkTheme={isDarkTheme} to="/">Home</NavLink>
        <NavLink isDarkTheme={isDarkTheme} to="/about">About Us</NavLink>
        <NavLink isDarkTheme={isDarkTheme} to="/menu">Menu</NavLink>
        <NavLink isDarkTheme={isDarkTheme} to="/review">Review</NavLink>
        <NavLink isDarkTheme={isDarkTheme} to="/contact">Contact</NavLink>
        <ThemeIconWrapper onClick={toggleTheme}>
          {isDarkTheme ? (
            <IoMoonOutline style={{ color: 'white' }} size="1.5rem" />
          ) : (
            <FiSun style={{ color: 'white', }} size="1.5rem" />
          )}
        </ThemeIconWrapper>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
