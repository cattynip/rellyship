import { HTMLAttributes } from "react";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";
import IRellyShipDescription from "@components/RellyShipComponents/RellyShipDescription";

interface IRellyShipLabelProps extends IRellyShipComponent {
  labelContent?: string;
  description?: string;
  children?: React.ReactNode;
  required?: boolean;
  link?: string;
  reverse?: boolean;
  narrower?: boolean;
}

const RellyShipLabel = ({
  labelContent,
  description,
  children,
  required,
  link,
  reverse,
  narrower,
  extraClassName,
  ...props
}: IRellyShipLabelProps & HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={joinClass([
        "flex items-center justify-between",
        extraClassName ? extraClassName : "",
        reverse ? "flex-row-reverse" : "",
        narrower ? "p-0" : "pb-4"
      ])}
      htmlFor={link ? link : undefined}
      {...props}
    >
      {labelContent ? labelContent : children}
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
