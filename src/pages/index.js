import Head from "next/head";
import { Nunito_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Body from "@/components/Body/Body";
import Subheader from "@/components/Subheader";

const Kaisei = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Aahad Aazar</title>
        <meta
          name="description"
          content="Aahad Aazar Software Engineer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <main className={`${Kaisei.className} ${styles.main}`}>
        <Header />
        <Subheader />
        <Body />
      </main>
    </>
  );
}
