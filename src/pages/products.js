import { useEffect } from "react";
import Head from "next/head";

export default function TermsConditions() {

  useEffect(() => {


  let gebruikerTaal = navigator.language || navigator.userLanguage;
  if (gebruikerTaal.includes('nl')) {
      // Nederland en Vlaanderen
      window.location.href = "https://halaldelight.nl/product-categorie/halal-snoepjes/?count=60"
    } else if (gebruikerTaal.includes('de')) {
      // Duitsland en Oostenrijk
      window.location.href = "https://halaldelight.de/produkt-kategorie/halal-suessigkeiten/?count=60"
    } else if (gebruikerTaal.includes('fr')) {
      // Frankrijk en Wallonië
      window.location.href = "https://halaldelight.fr/categorie-produit/bonbons-halal/?count=60"  
    } else {
      window.location.href = "https://halaldelight.nl/product-categorie/halal-snoepjes/?count=60"
  }
});

  return (
    <>
      <Head>
          <title>Halal Delight EU - Products</title>
          <meta name="description" content="Ingredients and nutritional values products page."/>
          <meta name="og:description" content="Ingredients and nutritional values products page"/>
          <meta property="og:url" content="https://www.halaldelight.eu/products"/>
          <meta property="og:title" content="Halal Delight EU"/>
      </Head>

      <div className="content">
        <div>
            <h1>Products</h1>

            <b>Redirecting...</b>
            <br/><br/><br/>

        </div>
      </div>
    </>
  );
}
