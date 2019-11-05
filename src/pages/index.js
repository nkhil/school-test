import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/styledComponents/Hero';
import bgImage from '../../static/hero/hero.jpg';
import BodyText from '../components/styledComponents/BodyText';
import Footer from '../components/styledComponents/Footer';

export default function Index() {
  return (
    <>
      <Layout />
      <Hero bgImage={bgImage} />
      <BodyText />
      <Footer />
    </>
  );
}
