import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Element } from 'react-scroll';

import HomepageLayout from '../layouts/Homepage';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Abouts from '../components/Abouts';
import Achievements from '../components/Achievements';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';

import Container from '../styles/Container';
import Section from '../styles/Section';

const WorksSection = styled(Section)`
  background: linear-gradient(to bottom, #ffffff 0%, #f5f7fa 100%);
`;

const AchievementsSection = styled(Section)`
  padding: 0;

  .header {
    background: ${props => props.theme.neutral200};
    padding: 24px 0;
    text-align: center;

    h2 {
      margin-bottom: 0;
    }
  }

  .body {
    background: ${props => props.theme.neutral100};
  }
`;

const FormSection = styled(Section)`
  background: ${props => props.theme.neutral100};
`;

const SkillsContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  p {
    color: ${props => props.theme.neutral600};
  }

  @media (max-width: ${props => props.theme.bp_medium}) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const FormContainer = styled(Container)`
  text-align: center;
  max-width: 624px;
`;

const StyledFooter = styled.footer`
  font-size: 14px;
  color: ${props => props.theme.neutral400};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;

  a {
    color: ${props => props.theme.neutral500};
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.neutral600};
    }
  }
`;

export default props => (
  <HomepageLayout>
    <Element name="home">
      <Hero />
    </Element>
    <Element name="work">
      <WorksSection>
        <Container>
          <h2>My Latest Work</h2>
          <Works works={props.data.works} />
        </Container>
      </WorksSection>
    </Element>
    <Element name="about">
      <Section>
        <Container>
          <h2>About Me</h2>
          <Abouts />
        </Container>
      </Section>
    </Element>
    <Element name="achievements">
      <AchievementsSection>
        <div className="header">
          <h2>Achievements</h2>
        </div>
        <div className="body">
          <Container>
            <Achievements />
          </Container>
        </div>
      </AchievementsSection>
    </Element>
    <Element name="skills">
      <Section>
        <SkillsContainer>
          <div>
            <h2>Skills</h2>
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Nullam quis risus
              eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.{' '}
            </p>
          </div>
          <Skills />
        </SkillsContainer>
      </Section>
    </Element>
    <Element name="contact">
      <FormSection>
        <FormContainer>
          <h2>Get in Touch</h2>
          <ContactForm />
        </FormContainer>
      </FormSection>
    </Element>
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
  </HomepageLayout>
);

export const query = graphql`
  query {
    works: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            author
            title
            date(formatString: "MMM YY")
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
