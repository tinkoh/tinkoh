import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import "@/styles/globals.css";
import Noise from "@/components/Noise";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={GeistSans.className}>
      <link
        rel="preload"
        href="/disco-everyday.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <Noise />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
