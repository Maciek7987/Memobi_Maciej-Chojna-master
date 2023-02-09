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
        <meta property="og:image" content="../../images/openGraph.webp" />

        <meta property="og:title" content="Memobi" />

        <meta
          property="og:description"
          content="Memobi sprawia, że nauka słówek staje się przyjemna i efektywna jak nigdy!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <SectionApp />
      <Footer />
    </>
  );
}
