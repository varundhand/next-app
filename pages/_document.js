import { Html, Head, Main, NextScript } from "next/document";
// this is rendered on the server so we cant have onClicks

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
