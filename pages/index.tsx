import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import HoverProfile from 'src/Components/Profile/HoverProfile';
const Home: React.FC = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HoverProfile> </HoverProfile>
    <main>Test</main>
  </>
);

export default Home;
