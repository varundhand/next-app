import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }) => {
  // const router = useRouter(); // this hook provides access to the router object which allows us to navigate b/w pages, access query parameters and manage route's state
  // const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// export const getServerSideProps = async (context) => { // context allows us to access the id in the url
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: { article },
//   };
// };

//! METHOD 2: getStaticProps + getStaticPaths
// this is faster as it is fetched at build time
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } })); //{params: {id: '1'}}

  return {
    paths,
    fallback: false,
  };
};

export default article;
