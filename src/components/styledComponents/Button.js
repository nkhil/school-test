import styled from 'styled-components';
import Button from '../Button';

const StyledButton = styled(Button)`
  margin: 20px 0;

  a {
    background-color: #da4a21;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;

export default StyledButton;
