
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from '../components/Layout';
import Heading from '../components/Heading';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Home() {
  return (
    
      <Layout>

      <main>
        <Heading/>
       
       
      </main>
      </Layout>
    
  );
}
