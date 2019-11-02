import styled from 'styled-components';
import Title from '../Title';

const StyledTitle = styled(Title)`
  display: none;
  a {
    text-decoration: none;
    color: black;
  }

  h1 {
    margin: 5px;
    font-size: 1.8rem;
  }

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: block;
  }
`;

export default StyledTitle;
