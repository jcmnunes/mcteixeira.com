import React, { Component } from 'react';
import styled from 'styled-components';

import IconCloudDownload from '../images/icon-cloud-download.svg';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.neutral100};

  &:hover {
    img {
      animation-name: bounce;
    }
  }

  img {
    margin-bottom: 0;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  span {
    margin-left: 12px;
  }

  @media (max-width: ${props => props.theme.bp_semilarge}) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    margin-top: 32px;
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-10px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-1px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;

class DownloadCv extends Component {
  render() {
    return (
      <StyledButton>
        <img width="24px" src={IconCloudDownload} alt="icon-cloud-download" />
        <span>Download My CV</span>
      </StyledButton>
    );
  }
}

export default DownloadCv;
