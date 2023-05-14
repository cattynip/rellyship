import IBasicClassName from "@libs/client/manageClasses";
import { ChangeEvent, HTMLAttributes } from "react";
import { joinClass } from "./RellyShipComponent";

const TextAreaSet: IBasicClassName<
  {
    error?: boolean;
    narrow?: boolean;
  },
  {
    onChangeFn?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  } & HTMLAttributes<HTMLTextAreaElement>
> = {
  className:
    "bg-transparent border rounded-md border-gray-400 placeholder:text-sm transition-colors placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white w-full",
  returnFunction({ error, narrow }) {
    return joinClass([
      "bg-transparent border rounded-md border-gray-400 placeholder:text-sm transition-colors placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white w-full",
      error ? "border-red-700 hover:border-red-500 focus:border-red-500" : "",
      narrow ? "p-0" : "px-3 pt-3 pb-2.5"
    ]);
  },
  jsxFunction({ error, narrow, onChangeFn, extraClassName, ...props }) {
    let textAreaHeight: string | `${number}px` = "auto";

    return (
      <textarea
        className={joinClass([
          "bg-transparent border rounded-md border-gray-400 placeholder:text-sm transition-colors placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white w-full",
          error
            ? "border-red-700 hover:border-red-500 focus:border-red-500"
            : "",
          narrow ? "p-0" : "px-3 pt-3 pb-2.5",
          extraClassName ? extraClassName : ""
        ])}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          textAreaHeight = event.target.scrollHeight + "px";

          if (onChangeFn) {
            onChangeFn(event);
          }
        }}
        style={{
          height: textAreaHeight
        }}
        {...props}
      />
    );
  }
};

export default TextAreaSet;
