import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';

import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

function Layout({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Layout;
