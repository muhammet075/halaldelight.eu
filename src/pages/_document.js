import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-02BN25BL8M"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-02BN25BL8M')`
        }}
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
