/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/styledComponents/Container';

const H1 = styled.h1`
  font-size: 3.2rem;
  text-align: center;
`;

const Div = styled.div`
  p {
    margin: auto;
    max-width: 960px;
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 20px 10px;
  }

  h4 {
    margin: auto;
    max-width: 960px;
    font-size: 1.5rem;
    line-height: 1.4;
  }

  h2 {
    margin: auto;
    max-width: 960px;
  }

  table {
    margin: auto;
    font-size: 0.9rem;
    max-width: 1400px;
    border-collapse: separate;
    border-spacing: 0 1em;
    border-top: 5px solid black;
    border-bottom: 5px solid black;

    tr {
      text-align: left;
    }
    tr:nth-child(even) {
      background-color: #eee;
      color: #000;
    }
  }
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  return (
    <>
      <Layout />
      {/* <Container width="980px" full fullVertical> */}
      <H1>{post.frontmatter.title}</H1>
      <Div dangerouslySetInnerHTML={{ __html: post.html }} />
      {/* </Container> */}
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
