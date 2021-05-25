import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@Internal/Reducers';
import theme from '../src/Theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
);

export default App;
