import Layout from "@/components/Layout";
import "@/styles/globals.css"; // we cant import global stylesheets directly into the components

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); // page components
}
