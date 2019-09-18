import styled from 'styled-components';
import BodyText from '../BodyText';

const StyledBodyText = styled(BodyText)`
  padding: 0;

  ul {
    margin: 0;
    padding: 0;
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
  }
`;

export default StyledBodyText;
