import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/styledComponents/Hero';
import bgImage from '../../static/hero/hero2.png';
import BodyText from '../components/styledComponents/BodyText';
import Footer from '../components/styledComponents/Footer';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>St.Michael's School, Ahmednagar</title>
      </Helmet>
      <Layout />
      <Hero bgImage={bgImage} />
      <BodyText />
      <Footer />
    </>
  );
}
