import styled from 'styled-components';
import Title from '../Title';

const StyledTitle = styled(Title)`
  display: none;

  h1 {
    margin: 0;
  }

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: block;
  }
`;

export default StyledTitle;
