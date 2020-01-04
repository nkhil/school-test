/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Footer from '../components/styledComponents/Footer';

const H1 = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  margin: auto;
  max-width: 960px;
  padding-top: 40px;
  margin-bottom: 25px;

  @media screen and (max-width: 599px) {
    font-size: 2.3rem;
    text-align: left;
    padding-left: 15px;
    padding-right: 10px;
  }
`;

const Div = styled.div`
  min-height: calc(100vh - 70px);
  p {
    margin: auto;
    max-width: 960px;
    font-size: 1.2rem;
    line-height: 1.8;
    padding: 10px 0 20px 0;
  }

  h4 {
    margin: auto;
    max-width: 960px;
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 300;
    padding-top: 20px;
    text-align: center;
  }

  h2 {
    margin: auto;
    font-size: 1.8rem;
    max-width: 960px;
    padding-top: 20px;
    margin-bottom: 20px;
  }

  ul,
  ol {
    margin: auto;
    max-width: 960px;
    font-size: 1.1rem;
    margin-bottom: 20px;

    li {
      padding-top: 20px;
    }
  }

  table {
    margin: auto;
    font-size: 0.8rem;
    max-width: 1400px;
    padding: 10px;
    margin-top: 20px;
    border-collapse: separate;
    border-spacing: 30px 1em;
    border-top: 5px solid black;
    border-bottom: 5px solid black;

    tr {
      text-align: left;
    }
    /* tr:nth-child(even) {
      background-color: #eee;
      color: #000;
    } */

    th {
      white-space: nowrap;
    }
  }

  .map {
    margin: auto;
    max-width: 960px;
  }

  .mobile-only {
    display: none;
  }

  @media screen and (max-width: 599px) {
    padding: 0 15px;

    table {
      td {
        border-right: solid 1px #eee;
        padding: 15px;
        margin: 10px;
        /* border-left: solid 1px #f00; */
      }

      tr {
        text-align: center;
      }
    }

    .mobile-only {
      display: block;
    }
  }
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  return (
    <>
      <Helmet>
        <title>St.Michael's School Ahmednagar - {post.frontmatter.title}</title>
      </Helmet>
      <Layout />
      <H1>{post.frontmatter.title}</H1>
      <Div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;
