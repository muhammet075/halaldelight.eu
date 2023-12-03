import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>Halal Delight</title>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <meta name="description" content="Halal Delight EU"/>
          <meta name="keywords" content="Halal Delight EU"/>
          <meta name="og:description" content="Halal Delight EU"/>
          <meta property="og:url" content="https://www.halaldelight.eu/"/>
          <meta property="og:image" content="/logo.png" />
          <meta property="og:title" content="Halal Delight EU"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
