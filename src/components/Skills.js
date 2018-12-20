import React, { Component } from 'react';
import styled from 'styled-components';

const skills = [
  {
    key: '1',
    title: 'Lorem ipsum',
    value: '87%',
  },
  {
    key: '2',
    title: 'Dolor',
    value: '75%',
  },
  {
    key: '3',
    title: 'Amet',
    value: '55%',
  },
  {
    key: '4',
    title: 'Ipsum',
    value: '89%',
  },
  {
    key: '5',
    title: 'Parturient',
    value: '45%',
  },
];

const Skill = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .title {
      text-transform: uppercase;
      color: ${props => props.theme.neutral600};
      letter-spacing: 1px;
      font-weight: 700;
      font-size: 14px;
    }

    .value {
      font-weight: 700;
      color: ${props => props.theme.neutral800};
    }
  }

  .bar {
    width: 100%;
    height: 8px;
    border-radius: 100px;
    background: ${props => props.theme.neutral200};
    margin-bottom: 24px;
    position: relative;

    .scale {
      position: absolute;
      height: 8px;
      border-radius: 999rem;
      left: 0;
      bottom: 0;
      top: 0;
      background: ${props => props.theme.primary700};
    }
  }
`;

class Skills extends Component {
  render() {
    return (
      <div>
        {skills.map(skill => (
          <Skill key={skill.key}>
            <div className="header">
              <div className="title">{skill.title}</div>
              <div className="value">{skill.value}</div>
            </div>
            <div className="bar">
              <div className="scale" style={{ width: skill.value }} />
            </div>
          </Skill>
        ))}
      </div>
    );
  }
}

export default Skills;
