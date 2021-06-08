/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import "../styles/globals.css";
import { Provider } from 'react-redux';
import theme from '../utils/theme';
import 'focus-visible/dist/focus-visible';
import store from '../store';

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={extendedTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
