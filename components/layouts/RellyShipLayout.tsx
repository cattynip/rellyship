import Header from "@components/Header";
import Head from "next/head";

interface IRellyShipLayoutProps {
  isUserIn: boolean;
  children: React.ReactNode;
}

const RellyShipLayout = ({ isUserIn, children }: IRellyShipLayoutProps) => {
  return (
    <div>
      <Head>
        <link href="/logo.png" rel="icon" />
        <title>RellyShip</title>
      </Head>

      <Header isUserIn={isUserIn} />

      <main className="dark:mix-blend-darken dark:text-zinc-50 mix-blend-lighten text-black pt-28 w-full max-w-5xl mx-auto px-5">
        {children}
      </main>
    </div>
  );
};

export default RellyShipLayout;
