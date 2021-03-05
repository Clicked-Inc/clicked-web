import Head from 'next/head';
import React from 'react';
import PageWrapper from '../src/Components/PageWrapper';

const Home: React.FC = () => (
  <>
    <PageWrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Test</main>
    </PageWrapper>
  </>
);

export default Home;
