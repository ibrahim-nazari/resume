import "../style/global.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const url = process.env.ORIGIN;
  return (
    <>
      <Head>
        <title>Ibrahim Nazari Web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Freelance web developer resume" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`${url}/images/ibrahim-nazari-web-developer-from-afghanistan.jpg`}
        />
        <meta property="og:url" content={`${url}/about`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="I am Ibrahim Nazari, I am a freelance web developer, I have over
          6+ years of Website and Web Application Development. My goal is to
          create Clean, Professional, Seo, and User Friendly Responsive
          Websites "
        />
        <meta property="og:site_name" content="Ibrahim Nazari Resume, Inc." />
        <meta
          name="twitter:image:alt"
          content="freelance web developer resume"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
