import Layout from '@/components/Layout'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { DataProvider } from '../Store/GlobalState';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    </DataProvider>
  )
}
