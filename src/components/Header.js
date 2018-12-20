import React, { Component } from 'react';
import styled from 'styled-components';

import logoImg from '../images/logo.svg';

const StyledHeader = styled.header`
  height: 60px;
  background: #fff;
  box-shadow: ${props => props.theme.shadow100};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 0;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <img src={logoImg} alt="logo" width="100px" />
      </StyledHeader>
    );
  }
}

export default Header;
