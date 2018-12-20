import React, { Component } from 'react';
import styled from 'styled-components';

import Work from './Work';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  position: relative;
  width: 100%;
`;

class Works extends Component {
  render() {
    return (
      <StyledGrid>
        {this.props.works.edges.map(({ node }) => (
          <Work key={node.id} data={node} />
        ))}
      </StyledGrid>
    );
  }
}

export default Works;
