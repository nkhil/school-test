import styled, { css } from 'styled-components';
import Navbar from '../Navbar';

const StyledNavbar = styled(Navbar)`
  border-radius: 20px;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    top: 100%;
    /* background-color: #000; */
    justify-content: flex-end;
    /* justify-content: center; */
    /* -moz-border-radius: 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    border-radius: 5px 5px 0px 0px; */
  }

  li {
    font-size: 1.2rem;
    font-weight: 600;
    a {
      &:hover {
        cursor: pointer;
        color: #402626;
        border-bottom: 5px solid black;
      }
    }

    a {
      display: block;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
      text-transform: capitalize;
      color: #000;
      border-bottom: 5px solid transparent;
    }
  }

  @media screen and (max-width: 599px) {
    transition: all 0.2s ease-out;

    ${props => {
      if (props.isOpen) {
        return css`
          display: block;
          /* opacity: 1; */
          height: auto;
        `;
      }
      return css`
        display: none;
        /* opacity: 0; */
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
      border-radius: 0;
    }

    li {
      font-size: 1.5rem;
      width: 100vw;
      display: flex;
    }
  }
`;

export default StyledNavbar;
