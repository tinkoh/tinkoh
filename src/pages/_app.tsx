import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import localFont from "next/font/local"

import "@/styles/globals.css";
import Noise from "@/components/Noise";

const discoEveryday = localFont({
  src: "../assets/fonts/disco-everyday.ttf",
  variable: "--font-disco-everyday"
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${GeistSans.className} ${discoEveryday.className}`}>
      <Noise />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
