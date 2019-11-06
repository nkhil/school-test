/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Container from './styledComponents/Container';
import MainContainer from './styledComponents/MainContainer';
import Flex from './styledComponents/Flex';

export default function Footer({ className }) {
  return (
    <div className={className}>
      <MainContainer bgColor="#000">
        <Container full backgroundColor="#000">
          <Flex justifyBetween>
            <Flex column>
              <h2>Contact us</h2>
              <p>
                Office: 0241-2321529
                <br />
                Office Administrator: +91 9850 730 294
                <br />
                Headmistress: +91 9689 123 758
              </p>
              <p>
                Web & Social Media Co-ordinator: +91 9689 473 312
                <br />
                Email: school.st.michaels@gmail.com
              </p>
            </Flex>
            <Flex column alignEnd contentEnd justifyEnd>
              <p>Copyright © {new Date().getFullYear()} St Michael's School Ahmednagar</p>
            </Flex>
          </Flex>
        </Container>
      </MainContainer>
    </div>
  );
}
