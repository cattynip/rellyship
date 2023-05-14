import IBasicClassName from "@libs/client/manageClasses";
import { HTMLAttributes } from "react";

const DescriptionSet: IBasicClassName<
  {},
  { description: string },
  HTMLAttributes<HTMLParagraphElement>
> = {
  className:
    "text-sm text-gray-400 transition-colors hover:text-white cursor-default",
  returnFunction() {
    return "text-sm text-gray-400 transition-colors hover:text-white cursor-default";
  },
  jsxFunction({ description, ...props }) {
    return (
      <p
        className="text-sm text-gray-400 transition-colors hover:text-white cursor-default"
        {...props}
      >
        {description}
      </p>
    );
  }
};

export default DescriptionSet;
