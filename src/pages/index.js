import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/styledComponents/Hero';
import bgImage from '../../static/hero/hero.jpg';
import BodyText from '../components/styledComponents/BodyText';

export default function Index() {
  return (
    <>
      <Layout />
      <Hero bgImage={bgImage} />
      <BodyText />
    </>
  );
}
