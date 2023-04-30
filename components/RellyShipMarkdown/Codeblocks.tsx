import { library } from "@fortawesome/fontawesome-svg-core";
import IRellyShipMarkdownProps from "./MarkdownComponent";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { MouseEvent, useEffect } from "react";
import hljs from "highlight.js";

library.add(faClipboard);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface ICodeblocksProps extends IRellyShipMarkdownProps {}

const Codeblock = ({ children }: ICodeblocksProps) => {
  useEffect(() => {
    // hljs.highlightAll();
  }, []);

  return (
    <pre className="relative rounded-lg my-2">
      <code>{children}</code>
      <div className="h-full absolute top-0 right-0 flex items-start justify-center p-2">
        <button
          className="p-1.5 px-3 rounded-lg bg-gray-800"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            navigator.clipboard.writeText(children.props.children);
          }}
        >
          <FontAwesomeIcon icon={"clipboard"} />
        </button>
      </div>
    </pre>
  );
};

export default Codeblock;
