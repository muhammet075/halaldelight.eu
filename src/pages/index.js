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
        <title>Halal Delight</title>
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
