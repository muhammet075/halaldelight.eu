import { useEffect } from "react";
import { Translate } from "../components/translate";
import Hero from "../components/hero";
import PriceCalculator from "../components/pricecalculator";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    Translate();
  });

  return (
    <>
      <Head>
        <title>Halal Delight</title>
      </Head>

      <div>


      </div>
    </>
  );
}
