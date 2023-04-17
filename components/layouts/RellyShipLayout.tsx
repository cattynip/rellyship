import Head from "next/head";

interface IRellyShipLayoutProps {
  children: React.ReactNode;
}

const RellyShipLayout = ({ children }: IRellyShipLayoutProps) => {
  return (
    <div>
      <Head>
        <link href="/logo.png" rel="icon" />
        <title>RellyShip</title>
      </Head>
      <main className="dark:mix-blend-darken dark:text-zinc-50 mix-blend-lighten text-black">
        {children}
      </main>
    </div>
  );
};

export default RellyShipLayout;
