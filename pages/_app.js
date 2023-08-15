import "@/styles/globals.css"; // we cant import global stylesheets directly into the components

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
