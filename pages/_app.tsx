import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@Reducers';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
);

export default App;
