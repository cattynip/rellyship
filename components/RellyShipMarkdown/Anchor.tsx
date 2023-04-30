import IRellyShipMarkdownProps from "./MarkdownComponent";

interface IAnchorProps extends IRellyShipMarkdownProps {}

const Anchor = ({ children }: IAnchorProps) => {
  return (
    <a className="text-purple-400 underline underline-offset-4 focus:underline-offset-1 hover:underline-offset-1 transition-all hover:text-purple-500 border border-transparent focus:border-white p-1 focus:outline-none">
      {children}
    </a>
  );
};

export default Anchor;
