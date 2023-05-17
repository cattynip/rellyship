import { HTMLAttributes, LabelHTMLAttributes } from "react";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";
import IRellyShipDescription from "@components/RellyShipComponents/RellyShipDescription";

interface IRellyShipLabelProps extends IRellyShipComponent {
  labelContent: string;
  description?: string;
  required?: boolean;
  reverse?: boolean;
  narrower?: boolean;
  isUnbolded?: boolean;
}

const RellyShipLabel = ({
  labelContent,
  description,
  required,
  reverse,
  narrower,
  isUnbolded,
  extraClassName,
  ...props
}: IRellyShipLabelProps & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={joinClass([
        "flex items-center justify-between",
        extraClassName ? extraClassName : "",
        reverse ? "flex-row-reverse" : "",
        narrower ? "p-0" : "pb-4"
      ])}
      {...props}
    >
      <span
        className={isUnbolded ? "text-lg font-medium" : "text-xl font-bold"}
      >
        {labelContent}
      </span>
      <div className="flex space-x-1.5">
        {description ? (
          <IRellyShipDescription
            description={description}
            extraClassName="hidden sm:block"
          />
        ) : null}
        {required ? <span className="text-red-500">*</span> : null}
      </div>
    </label>
  );
};

export default RellyShipLabel;
