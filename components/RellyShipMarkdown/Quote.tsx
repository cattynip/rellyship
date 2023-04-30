import IRellyShipMarkdownProps from "./MarkdownComponent";

interface IQuoteProps extends IRellyShipMarkdownProps {}

const Quote = ({ children }: IQuoteProps) => {
  return (
    <blockquote className="border-l-4 border-l-gray-600 pl-4 py-2 my-1">
      {children}
    </blockquote>
  );
};

export default Quote;
