import React, { Component } from 'react';
import styled from 'styled-components';

import iconPresentation from '../images/icon-presentation.svg';
import iconWork from '../images/icon-work.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: ${props => props.theme.bp_medium}) {
    grid-template-columns: 1fr;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;

  h3 {
    color: ${props => props.theme.neutral800};
    font-size: 20px;
  }

  p {
    color: ${props => props.theme.neutral600};
    margin-bottom: 0;
  }

  .icon {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 16px;

    img {
      margin-bottom: 0;
    }

    &.bg-primary {
      background: ${props => props.theme.primary100};
    }

    &.bg-supporting {
      background: ${props => props.theme.supporting100};
    }
  }
`;

class Abouts extends Component {
  render() {
    return (
      <Wrapper>
        <About>
          <div className="icon bg-primary">
            <img src={iconPresentation} alt="icon-presentation" />
          </div>
          <h3>My education</h3>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Nullam quis risus eget
            urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.
          </p>
        </About>
        <About>
          <div className="icon bg-supporting">
            <img src={iconWork} alt="icon-work" />
          </div>
          <h3>My career</h3>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Nullam quis risus eget
            urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.
          </p>
        </About>
      </Wrapper>
    );
  }
}

export default Abouts;
