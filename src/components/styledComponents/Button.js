import styled from 'styled-components';
import Button from '../Button';

const StyledButton = styled(Button)`
  margin: 20px 0;

  a {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 1.5rem;
    display: inline-block;
    box-shadow: rgba(79, 79, 79, 0.25) 0px 4px 20px;
  }
`;

export default StyledButton;
