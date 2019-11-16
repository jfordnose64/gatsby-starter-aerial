import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Helmet from 'react-helmet';

const IndexPage = () => (
  <Layout>
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jackson Ford Portfolio</title>
      </Helmet>
      <div id="bg" />
      <div id="overlay" />
      <div id="main">
        <Header />
        <Footer />
      </div>
    </>
  </Layout>
);

export default IndexPage;
