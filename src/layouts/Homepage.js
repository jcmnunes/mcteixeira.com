import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';

import theme from '../styles/theme';
import GlobalStyle from '../styles/Global';

const Homepage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} />
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <div>{children}</div>
            <GlobalStyle />
          </div>
        </ThemeProvider>
      </>
    )}
  />
);

Homepage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Homepage;
