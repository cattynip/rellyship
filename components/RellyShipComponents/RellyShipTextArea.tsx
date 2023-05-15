import {
  ChangeEvent,
  ChangeEventHandler,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState
} from "react";
import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";

interface IRellyShipTextAreaProps
  extends IRellyShipInputTypeComponent,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

const RellyShipTextArea = ({
  error,
  wider,
  narrower,
  extraClassName,
  ...props
}: IRellyShipTextAreaProps) => {
  return (
    <textarea
      className={joinClass([
        "bg-transparent border rounded-md border-gray-400 placeholder:text-sm transition-colors placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white w-full",
        error ? "border-red-700 hover:border-red-500 focus:border-red-500" : "",
        wider ? "px-3 pt-3 pb-2.5" : "p-0",
        narrower ? "p-0" : "px-3 pt-3 pb-2.5",
        extraClassName ? extraClassName : ""
      ])}
      {...props}
    />
  );
};

export default RellyShipTextArea;
