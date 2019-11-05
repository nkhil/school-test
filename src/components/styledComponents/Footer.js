import styled from 'styled-components';
import Footer from '../Footer';

const StyledFooter = styled(Footer)`
  background-color: #000;
  color: #fff;
  h2 {
    margin-left: 50px;
  }
  p {
    font-size: 14px;
    text-align: left;
    line-height: 1.8;
    margin-left: 50px;
  }

  .right {
    text-align: right;
  }
`;

export default StyledFooter;
