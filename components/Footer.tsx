import RellyShipAnchor from "./RellyShipComponents/RellyShipAnchor";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800 text-zinc-400 mt-10 py-7 flex items-center justify-center">
      <span>
        &copy; {new Date().getFullYear()}{" "}
        <RellyShipAnchor href={"https://github.com/cattynip/"}>
          Cattynip{" "}
        </RellyShipAnchor>
        All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
