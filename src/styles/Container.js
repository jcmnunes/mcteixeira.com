import styled from 'styled-components';

const Container = styled.div`
  max-width: 952px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.bp_large}) {
    padding: 0 32px;
  }

  @media (max-width: ${props => props.theme.bp_medium}) {
    padding: 0 64px;
  }

  @media (max-width: ${props => props.theme.bp_small}) {
    padding: 0 32px;
  }
`;

export default Container;
