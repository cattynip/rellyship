import IRellyShipMarkdownProps from "./MarkdownComponent";

interface IUlsProps extends IRellyShipMarkdownProps {}

const Ul = ({ children }: IUlsProps) => {
  return <ul className="list-disc px-4 py-1">{children}</ul>;
};

export default Ul;
