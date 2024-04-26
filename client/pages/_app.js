import '../styles/global.css'; // Import global styles

import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps}/>
      <Analytics></Analytics>
    </>
  );
}

export default MyApp;