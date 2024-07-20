import { Theme } from "@/chakra/main";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Providers } from "./providers";

export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
          <Providers >
            <Component {...pageProps} />
          </Providers>
      </>
    );
  }