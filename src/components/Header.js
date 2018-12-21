import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Burger from './Burguer';

import logoImg from '../images/logo.svg';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff;
  box-shadow: ${props => props.theme.shadow100};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0.97;

  img {
    margin-bottom: 0;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Link to="home" smooth="easeInOutQuint" offset={-60} style={{ cursor: 'pointer' }}>
          <img src={logoImg} alt="logo" width="100px" />
        </Link>
        <Burger />
      </StyledHeader>
    );
  }
}

export default Header;
