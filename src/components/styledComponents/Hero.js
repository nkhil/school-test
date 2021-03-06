import styled from 'styled-components';
import Hero from '../Hero';

const StyledHero = styled(Hero)`
  text-align: center;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(32, 32, 32, 0.5)),
    url(${props => props.bgImage}) no-repeat center center fixed;
  background-size: cover;
  color: white;

  h1 {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 5px;
  }

  p {
    font-size: 3rem;
    font-weight: 600;
    margin: 0 10px 20px 10px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    p {
      font-size: 2.3rem;
      padding: 0 10px;
    }
  }
`;

export default StyledHero;
