import Head from "next/head";
import { Inter, Fira_Code } from "next/font/google";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Subheader from "@/components/Subheader";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aahad Aazar | Software Engineer</title>
        <meta
          name="description"
          content="Aahad Aazar - Full Stack Software Engineer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main
        className={`${inter.variable} ${firaCode.variable} font-sans min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30`}
      >
        <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col min-h-screen">
          <Header />
          <Subheader />
          <Body />
          <ChatWidget />
        </div>
        
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[100px]" />
        </div>
      </main>
    </>
  );
}
