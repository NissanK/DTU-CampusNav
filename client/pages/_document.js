import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* google fonts below "Play" */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet"/>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
