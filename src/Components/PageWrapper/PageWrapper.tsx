import { Box } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

const PageWrapper: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box as="main">{children}</Box>
  </>
);

export default PageWrapper;
