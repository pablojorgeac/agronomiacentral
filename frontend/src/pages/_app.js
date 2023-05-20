import Head from 'next/head';
import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid';
import { esES as coreesES } from '@mui/material/locale';
import { AppContextProvider } from '../../contexts/AppContext';
import axios from 'axios';
const URL =
  process.env.NEXT_PUBLIC_AXIOS_BASE_URL || 'http://localhost:3001/api';

const theme = createTheme(esES, coreesES);

axios.defaults.baseURL = URL;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Club Deportivo del barrio para el barrio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
