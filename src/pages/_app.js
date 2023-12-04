import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta property="og:image" content="/logo.png" />
        <meta name="keywords" content="Halal Delight, Halal snoepjes, Halal candies, Halal sweets"/>
        <link rel="icon" type="image/x-icon" href="/favico.png"/>
      </Head>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  ) 
}
