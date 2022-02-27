import Head from "next/head";
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alejo Bocanegra - Portfolio</title>
        <meta name="description" content="Mi Portfolio Personal - Alejo Bocanegra." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />

      
      </main>

      <footer>
      
      </footer>
    </div>
  );
}
