import React, { Component } from 'react';
import styled from 'styled-components';

import iconCheveronRight from '../images/icon-cheveron-right.svg';

const StyledButton = styled.button`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: bold;
  }

  img {
    margin-bottom: 0;
  }
`;

class LinkButton extends Component {
  render() {
    return (
      <StyledButton>
        <span>Read more</span>
        <img width="24px" src={iconCheveronRight} alt="icon-cheveron-right" />
      </StyledButton>
    );
  }
}

export default LinkButton;
