import { server } from "@/config";
import Head from "next/head"; // for titles, descriptions, meta tags
import { Inter } from "next/font/google";
import ArticleList from "@/components/ArticleList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
  console.log(articles);
  // console.log(server);
  // const { title, body } = articles;
  return (
    <div>
      {/* can add custom head tags */}
      <Head>
        <title>WebDEv News</title>
        <meta name="keywords" content="web dev, programming, coding" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const resp = await fetch(`${server}/api/articles`); // server allows us to switch between local development and production env seemlessly
  const articles = await resp.json();
  // const articles = (await resp.GET()).json(); //* Alter
  return {
    props: {
      articles,
    },
  };
};

//fetching data using getStaticProps (fetches in build time)
// export const getStaticProps = async () => {
//   const resp = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await resp.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
