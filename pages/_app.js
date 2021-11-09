import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({});

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;