import Head from "next/head"; // for titles, descriptions, meta tags
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
  console.log(articles);
  // const { title, body } = articles;
  return (
    <div>
      {/* can add custom head tags */}
      <Head>
        <title>WebDEv News</title>
        <meta name="keywords" content="web dev, programming, coding" />
      </Head>
      {articles.map((article) => (
        <h1 key={article.id}>{article.title}</h1>
      ))}
    </div>
  );
}

//fetching data using getStaticProps (fetches in build time)
export const getStaticProps = async () => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await resp.json();

  return {
    props: {
      articles,
    },
  };
};
