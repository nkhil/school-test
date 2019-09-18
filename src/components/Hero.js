/* eslint-disable react/prop-types */
import React from 'react';
import Container from './styledComponents/Container';
import homepageHeroContent from '../constants/homepageHeroContent';
import Button from './styledComponents/Button';

export default function Hero({ className }) {
  return (
    <Container full className={className}>
      <h1>{homepageHeroContent.title}</h1>
      <p>{homepageHeroContent.bigText.toUpperCase()}</p>
      <Button text="About the school" path="/about" />
    </Container>
  );
}
