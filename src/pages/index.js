import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/styledComponents/Hero';
import bgImage from '../../static/hero/hero.jpg';
import ContentBlock from '../components/styledComponents/ContentBlock';
import contentBlockCopy from '../constants/contentBlocks';

export default function Index() {
  return (
    <>
      <Layout />
      <Hero bgImage={bgImage} />
      <ul style={{ margin: 0, padding: 0 }}>
        {contentBlockCopy.map((contentBlock, i) => (
          <li key={i} style={{ listStyleType: 'none' }}>
            <ContentBlock
              title={contentBlock.title}
              body={contentBlock.body}
              buttonText={contentBlock.buttonText}
              buttonPath={contentBlock.buttonPath}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
