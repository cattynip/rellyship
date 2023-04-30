import IRellyShipMarkdownProps from "./MarkdownComponent";

interface IOlsProps extends IRellyShipMarkdownProps {}

const Ol = ({ children }: IOlsProps) => {
  return <ol className="list-decimal px-4 py-1">{children}</ol>;
};

export default Ol;
