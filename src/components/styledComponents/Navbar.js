import styled, { css } from 'styled-components';
import Navbar from '../Navbar';

const StyledNavbar = styled(Navbar)`
  border-radius: 20px;
  position: relative;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    top: 100%;
    /* background-color: #000; */
    justify-content: flex-end;
    /* align-items: center; */
    /* justify-content: center; */
    /* -moz-border-radius: 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    border-radius: 5px 5px 0px 0px; */
  }

  li {
    font-size: 1.2rem;
    font-weight: 600;
    button,
    a {
      &:hover {
        cursor: pointer;
        color: #402626;
        border-bottom: 5px solid black;
      }
    }

    button:focus {
      outline: 0;
    }

    button,
    a {
      display: block;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
      text-transform: capitalize;
      color: #000;
      border-bottom: 5px solid transparent;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .align-arrow {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav-dropdown {
    display: none;
  }

  .show {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #fff;
    border-radius: 0px 0px 3px 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.35);
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
