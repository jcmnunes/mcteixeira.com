import React, { Component } from 'react';
import styled from 'styled-components';

const data = [
  {
    key: '1',
    stat: 20,
    name: 'articles',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    key: '2',
    stat: 5,
    name: 'projects',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
  },
  {
    key: '3',
    stat: 6,
    name: 'years of experience',
    description: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
];

const StyledAchievements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${props => props.theme.bp_semilarge}) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    max-width: 350px;
    margin: 0 auto;
  }
`;

const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 48px;

  @media (max-width: ${props => props.theme.bp_semilarge}) {
    padding-bottom: 0;

    &:last-of-type {
      padding-bottom: 48px;
    }
  }

  .stat {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: -12px;
  }

  .name {
    font-size: 24px;
    color: ${props => props.theme.primary700};
    margin-bottom: 8px;
  }

  .description {
    color: ${props => props.theme.neutral600};
    text-align: center;
  }
`;

class Achievements extends Component {
  render() {
    return (
      <StyledAchievements>
        {data.map(achievement => (
          <Achievement key={achievement.key}>
            <div className="stat">{achievement.stat}</div>
            <div className="name">{achievement.name}</div>
            <div className="description">{achievement.description}</div>
          </Achievement>
        ))}
      </StyledAchievements>
    );
  }
}

export default Achievements;
