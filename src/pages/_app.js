import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";

import "../styles/scss/style.scss";
import "../styles/globals.css";
import { Vazirmatn } from "next/font/google";
import { register } from "swiper/element/bundle";

const vazirmatn = Vazirmatn(
  {
    subsets: ["latin"],
    variable: "--font-vazirmatn",
    display: "swap",
  },
);
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>{AppData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      <Component className={vazirmatn.className} {...pageProps} />
    </>
  );
}

export default MyApp;
