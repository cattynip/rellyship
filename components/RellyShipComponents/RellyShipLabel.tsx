import IBasicClassName from "@libs/client/manageClasses";
import DescriptionSet from "./RellyShipDescription";
import { joinClass } from "./RellyShipComponent";
import { HTMLAttributes, LabelHTMLAttributes } from "react";

const LabelSet: IBasicClassName<
  {
    reverse?: boolean;
    narrower?: boolean;
  },
  {
    labelContent: string;
    description?: string;
    required?: boolean;
  } & LabelHTMLAttributes<HTMLLabelElement>
> = {
  className: "flex items-center justify-between text-xl font-bold",
  returnFunction({ reverse, narrower }) {
    return joinClass([
      "flex items-center justify-between text-xl font-bold",
      reverse ? "flex-row-reverse" : "",
      narrower ? "p-0" : "pb-4"
    ]);
  },
  jsxFunction({
    reverse,
    narrower,
    labelContent,
    description,
    required,
    ...props
  }) {
    return (
      <label
        className={joinClass([
          "flex items-center justify-between",
          reverse ? "flex-row-reverse" : "",
          narrower ? "p-0" : "pb-4"
        ])}
        {...props}
      >
        <span className="text-xl font-bold">{labelContent}</span>
        <div className="flex space-x-1.5">
          {description && (
            <p className={DescriptionSet.className}>{description}</p>
          )}
          {required && <span className="text-red-500">*</span>}
        </div>
      </label>
    );
  }
};

export default LabelSet;
