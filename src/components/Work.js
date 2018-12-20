import React, { Component } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import iconUserCircle from '../images/icon-user-circle.svg';
import iconTime from '../images/icon-time.svg';

import LinkButton from './LinkButton';

const Card = styled.div`
  background: #fff;
  box-shadow: ${props => props.theme.shadow300};
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${props => props.theme.shadow500};
    transform: scale(1.05);
  }

  .image {
    background-size: cover;
    width: 100%;
    height: 175px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .content {
    padding: 24px;
    flex: 1;
  }

  .title {
    color: ${props => props.theme.neutral900};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .excerpt {
    color: ${props => props.theme.neutral600};
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  .footer {
    padding: 12px 24px;
    display: flex;
    align-items: center;

    img {
      margin-bottom: 0;

      &:last-of-type {
        margin-left: 16px;
      }
    }

    .author {
      font-size: 12px;
      color: ${props => props.theme.neutral400};
      margin-left: 8px;
    }
  }
`;

class Work extends Component {
  render() {
    const { data } = this.props;
    return (
      <Card onClick={() => navigate(data.fields.slug)}>
        <div style={{ backgroundImage: `url(${data.frontmatter.thumbnail})` }} className="image" />
        <div className="content">
          <div className="title">{data.frontmatter.title}</div>
          <div className="excerpt">{data.excerpt}</div>
          <LinkButton />
        </div>
        <div className="footer">
          <img width="24px" src={iconUserCircle} alt="user-avatar" />
          <span className="author">{data.frontmatter.author}</span>
          <img width="24px" src={iconTime} alt="user-avatar" />
          <span className="author">{data.frontmatter.date}</span>
        </div>
      </Card>
    );
  }
}

export default Work;
