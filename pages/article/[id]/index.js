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

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: { article },
  };
};

export default article;
