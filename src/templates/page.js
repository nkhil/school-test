/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/styledComponents/Container';

const H1 = styled.h1`
  font-size: 3.2rem;
`;

const Div = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  return (
    <>
      <Layout />
      <Container width="960px" full fullVertical>
        <H1>{post.frontmatter.title}</H1>
        <Div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
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
