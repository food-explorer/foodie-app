/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CookiesProvider } from 'react-cookie';
import React from 'react';
import theme from '../utils/theme';
import 'focus-visible/dist/focus-visible';
import AuthProvider from '../context/auth-context';

const queryClient = new QueryClient();

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <ReactQueryDevtools />
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
