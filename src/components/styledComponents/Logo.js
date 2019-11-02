import styled from 'styled-components';
import Logo from '../Logo';

const StyledLogo = styled(Logo)`
  img {
    src: url(${props => props.src});
    alt: (${props => props.alt});
    align-self: center;
    flex: 1;
    max-width: 100%;
    height: auto;
    margin-top: ${props => {
      if (props.marginTop) return props.marginTop;
      return '25px';
    }};
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }
`;

export default StyledLogo;
