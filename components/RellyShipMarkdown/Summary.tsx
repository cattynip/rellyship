import IRellyShipMarkdownProps from "./MarkdownComponent";

interface ISummaryProps extends IRellyShipMarkdownProps {}

const Summary = ({ children }: ISummaryProps) => {
  console.log("This component is being called.");

  return (
    <details>
      <summary>asdjflksj</summary>
      sadjkladsfjkladsfjkladsfjklasdfljk
    </details>
  );
};

export default Summary;
