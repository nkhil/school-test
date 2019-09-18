import styled from 'styled-components';
import ContentBlock from '../ContentBlock';

const StyledContentBlock = styled(ContentBlock)`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 180px;
  margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.2rem;
    line-height: 2;
    margin-bottom: 50px;
  }

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 20px;
    margin-top: 30px;

    h2 {
    }
  }
`;

export default StyledContentBlock;
