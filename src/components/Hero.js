import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import DownloadCV from './DownloadCV';

import Container from '../styles/Container';

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.neutral800};
  background-image: ${props => props.theme.heroPattern};

  .hello {
    font-size: 24px;
    color: #ecfaff;
    font-weight: 700;
  }

  .name {
    font-size: 30px;
    color: ${props => props.theme.primary300};
    font-weight: 700;
    margin-bottom: 12px;
  }

  .description {
    max-width: 380px;
    color: #ecfaff;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px !important;
  padding-bottom: 80px !important;

  @media (max-width: ${props => props.theme.bp_semilarge}) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  @media (max-width: ${props => props.theme.bp_small}) {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
`;

const HeroImage = styled(Img)`
  @media (max-width: ${props => props.theme.bp_semilarge}) {
    display: none !important;
  }
`;

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        barelStave: file(relativePath: { eq: "barelStave.png" }) {
          childImageSharp {
            fixed(width: 450) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <StyledHero>
        <StyledContainer>
          <div>
            <div className="hello">Hello, I'm</div>
            <div className="name">Maria Teixeira</div>
            <div className="description">
              Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id
              ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus
              posuere velit.
            </div>
          </div>
          <HeroImage fixed={data.barelStave.childImageSharp.fixed} />
          <DownloadCV />
        </StyledContainer>
      </StyledHero>
    )}
  />
);

export default Hero;
