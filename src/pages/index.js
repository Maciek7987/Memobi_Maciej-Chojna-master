import Head from "next/head";
import Header from "../../components/Header";
import Main from "../../components/Main";
import SectionApp from "../../components/SectionApp";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Memobi</title>
        <meta
          name="description"
          content="Memobi sprawia, że nauka słówek staje się przyjemna i efektywna jak nigdy!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://memobi.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Memobi" />
        <meta
          property="og:description"
          content="Memobi sprawia, że nauka słówek staje się przyjemna i efektywna jak nigdy!"
        />
        <meta property="og:image" content="/openGraph.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="memobi.vercel.app" />
        <meta property="twitter:url" content="https://memobi.vercel.app/" />
        <meta name="twitter:title" content="Memobi" />
        <meta
          name="twitter:description"
          content="Memobi sprawia, że nauka słówek staje się przyjemna i efektywna jak nigdy!"
        />
        <meta name="twitter:image" content="/openGraph.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <SectionApp />
      <Footer />
    </>
  );
}
