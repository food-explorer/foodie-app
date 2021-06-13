/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import "../styles/globals.css";
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import theme from '../utils/theme';
import 'focus-visible/dist/focus-visible';
import store from '../store';

const queryClient = new QueryClient();

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={extendedTheme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
