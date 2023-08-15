import Head from "next/head"; // for titles, descriptions, meta tags
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* can add custom head tags */}
      <Head>
        <title>WebDEv News</title>
        <meta name="keywords" content="web dev, programming, coding" />
      </Head>
      <h1>Welcome to next</h1>
    </div>
  );
}
