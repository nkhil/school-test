import styled, { css } from 'styled-components';
import Navbar from '../Navbar';

const StyledNavbar = styled(Navbar)`
  border-radius: 20px;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: black;
    justify-content: flex-end;
    border-radius: 3px;
  }

  li {
    font-size: 1.2rem;

    a {
      &:hover {
        cursor: pointer;
        border-bottom: 3px solid white;
      }
    }

    a {
      display: block;
      padding: 20px 20px 10px 20px;
      text-decoration: none;
      text-transform: capitalize;
      color: white;
    }
  }

  @media screen and (max-width: 599px) {
    transition: all 2s ease-out;

    ${props => {
      if (props.isOpen) {
        return css`
          opacity: 1;
          height: auto;
        `;
      }
      return css`
        opacity: 0;
        height: 0;
        overflow: hidden;
      `;
    }}

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-align: left;
      margin: 0;
      padding: 0;
    }

    li {
      font-size: 1.5rem;
      width: 100vw;
      display: flex;
    }
  }
`;

export default StyledNavbar;
