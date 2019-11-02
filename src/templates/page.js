/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/styledComponents/Container';

const H1 = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  margin: auto;
  max-width: 960px;
  padding-top: 40px;
`;

const Div = styled.div`
  p {
    margin: auto;
    max-width: 960px;
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 10px 0 20px 0;
  }

  h4 {
    margin: auto;
    max-width: 960px;
    font-size: 1.3rem;
    line-height: 1.4;
    font-weight: 300;
    padding-top: 20px;
  }

  h2 {
    margin: auto;
    font-size: 1.8rem;
    max-width: 960px;
    padding-top: 20px;
    margin-bottom: 20px;
  }

  ul {
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

  @media screen and (max-width: 599px) {
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
