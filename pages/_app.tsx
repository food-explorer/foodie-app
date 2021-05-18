import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import "../styles/globals.css";
import theme from "../utils/theme";

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
