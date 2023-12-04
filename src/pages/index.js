import { useEffect } from "react";
import Head from "next/head";
import Stores from "../components/stores";
import Products from "../components/products";
import About from "../components/about";
import Contact from "../components/contact";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Halal Delight EU</title>
          <meta name="description" content="Provider of Halal candies and sweets available for purchase online, catering to customers in Europe."/>
          <meta name="og:description" content="Provider of Halal candies and sweets available for purchase online, catering to customers in Europe."/>
          <meta property="og:url" content="https://www.halaldelight.eu/"/>
          <meta property="og:title" content="Halal Delight EU"/>
      </Head>

      <div>
        <Stores/>
        <About/>
        <Products/>
        <Contact/>
      </div>
    </>
  );
}
