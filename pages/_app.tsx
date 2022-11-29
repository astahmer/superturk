import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStateProvider } from "../provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}
