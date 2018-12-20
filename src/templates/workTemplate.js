import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class WorkTemplate extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div>{data.markdownRemark.frontmatter.author}</div>
          <div>{data.markdownRemark.frontmatter.date}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </div>
    );
  }
}

export const query = graphql`
  query WorkTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMM YY")
      }
    }
  }
`;
