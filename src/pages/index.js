import Head from "next/head";
import { Inter, Fira_Code } from "next/font/google";
import Header from "@/components/Header";
import HeroFrame from "@/components/HeroFrame";
import Body from "@/components/Body";
import Subheader from "@/components/Subheader";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aahad Aazar | Product Engineer</title>
        <meta
          name="description"
          content="Aahad Aazar is a Product Engineer with Software Engineering, Data Engineering, and AI Engineering expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main
        id="main-content"
        className={`${inter.variable} ${firaCode.variable} min-h-screen bg-paper font-sans text-ink selection:bg-accent/30`}
      >
        <a
          href="#selected-work"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-ink px-4 py-3 text-sm font-medium text-paper transition-transform focus:translate-y-0"
        >
          Skip to selected work
        </a>
        <div className="page-shell relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 md:py-10">
          <HeroFrame>
            <Header />
            <Subheader />
          </HeroFrame>

          <Body />
        </div>
        <ChatWidget />
      </main>
    </>
  );
}
