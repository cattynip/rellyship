import { Html, Head, Main, NextScript } from "next/document";

function RellyShipDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="RellyShip is a place where you can ask a question to someone, make a vote publicly to users, and even offer a popular celebrity to your program officially."
        />
        <meta name="author" content="Seol SO" />
        <meta name="author" content="cattynip" />
        <meta name="twitter:title" content="RellyShip" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cattynip_" />
        <meta name="twitter:creator" content="@cattynip_" />
        <meta name="twitter:image" content="/cover-logo.png" />
        <meta property="og:site_name" content="RellyShip" />
        <meta name="og:title" content="RellyShip" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-best.png" />
        <link href="/logo.svg" rel="icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="dark:text-zinc-50 dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default RellyShipDocument;
