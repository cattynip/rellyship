import Header from "@components/Header";
import Head from "next/head";
import Footer from "@components/Footer";

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

      <main className="pt-24 w-full max-w-5xl mx-auto px-5">{children}</main>

      <Footer />
    </div>
  );
};

export default RellyShipLayout;
