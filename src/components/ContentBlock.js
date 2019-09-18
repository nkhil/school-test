/* eslint-disable react/prop-types */
import React from 'react';
import Button from './styledComponents/Button';
import Container from './styledComponents/Container';

export default function ContentBlock({ title, body, buttonText, buttonPath, className }) {
  return (
    <Container className={className}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Button text={buttonText} path={buttonPath} />
    </Container>
  );
}
