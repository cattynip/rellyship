import "@styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import RellyShipLayout from "@components/layouts/RellyShipLayout";
import { ThemeProvider } from "next-themes";

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
      <RellyShipLayout isUserIn={true}>
        <Component {...pageProps} />
      </RellyShipLayout>
    </ThemeProvider>
  );
}

export default App;
