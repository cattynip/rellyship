import IRellyShipMarkdownProps from "./MarkdownComponent";

type THeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeadingsProps extends IRellyShipMarkdownProps {
  heading: THeadingType;
}

const Heading = ({ heading, children }: IHeadingsProps) => {
  return (
    <>
      {heading === "h1" ? (
        <h1 className="font-black text-4xl pb-1 border-b border-b-gray-600 mb-1">
          {children}
        </h1>
      ) : heading === "h2" ? (
        <h2 className="font-extrabold text-3xl pb-0 border-b border-gray-700 mb-1">
          {children}
        </h2>
      ) : heading === "h3" ? (
        <h3 className="font-bold text-2xl -pb-0.5 border-b border-gray-800 mb-1">
          {children}
        </h3>
      ) : heading === "h4" ? (
        <h4 className="font-sembold text-xl">{children}</h4>
      ) : heading === "h5" ? (
        <h5 className="font-medium text-lg">{children}</h5>
      ) : (
        <h6 className="font-normal text-md">{children}</h6>
      )}
    </>
  );
};

export default Heading;
