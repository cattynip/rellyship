import IRellyShipMarkdownProps from "./MarkdownComponent";

interface IStrongProps extends IRellyShipMarkdownProps {}

const Strong = ({ children }: IStrongProps) => {
  return <strong className="font-semibold italic">{children}</strong>;
};

export default Strong;
