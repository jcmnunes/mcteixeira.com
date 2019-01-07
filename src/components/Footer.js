import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';

const StyledFooter = styled.footer`
  font-size: 14px;
  color: ${props => props.theme.neutral400};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  text-align: center;

  a {
    color: ${props => props.theme.neutral500};
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.neutral600};
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Container>
          © 2018 MCT - Maria Teixeira. Made with{' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{' '}
          and{' '}
          <span role="img" aria-label="coffee emoji">
            ☕️
          </span>{' '}
          by Jose Nunes (<a href="https://www.josenunes.xyz/">josenunes.xyz</a>)
        </Container>
      </StyledFooter>
    );
  }
}

export default Footer;
