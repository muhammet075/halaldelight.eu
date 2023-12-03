import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="description" content="Halal Delight EU"/>
        <meta property="og:title" content="Halal Delight EU" />
        <meta name="keywords" content="Halal Delight EU"/>
        <meta property="og:url" content="https://www.halaldelight.eu/"/>
        <meta property="og:image" content="/oglogo.png"/>
        <link rel="icon" type="image/x-icon" href="/logo.png"/>
      </Head>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  ) 
}
