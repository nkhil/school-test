/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Navbar from './styledComponents/Navbar';
import Logo from './styledComponents/Logo';
import Container from './styledComponents/Container';
import BurgerIcon from './styledComponents/BurgerIcon';
import Flex from './styledComponents/Flex';
import Title from './styledComponents/Title';
import GlobalStyles from './styledComponents/GlobalStyles';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <Container full fullVertical>
        <Logo />
        <Flex>
          <Title />
          <BurgerIcon isOpen={isOpen} handleIsOpen={handleIsOpen} />
        </Flex>
        <Navbar isOpen={isOpen} handleIsOpen={handleIsOpen} />
        {children}
      </Container>
    </>
  );
}
