import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

const Root: React.FC<AppProps> = (appProps) => {
  return (
    <Provider store={store}>
      <App {...appProps} />
    </Provider>
  );
};

export default Root;
