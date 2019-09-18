/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Navbar from './styledComponents/Navbar';
import logoImage from '../../static/logo/st-michaels-school.png';
import Logo from './styledComponents/Logo';
import Container from './styledComponents/Container';
import BurgerIcon from './styledComponents/BurgerIcon';
import Flex from './styledComponents/Flex';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Container full fullVertical>
      <Logo src={logoImage} />
      <BurgerIcon isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <Navbar isOpen={isOpen} handleIsOpen={handleIsOpen} />
      {children}
    </Container>
  );
}
