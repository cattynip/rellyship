import { Attributes, HTMLAttributes } from "react";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";
import IRellyShipDescription from "@components/RellyShipComponents/RellyShipDescription";

interface IRellyShipLabelProps extends IRellyShipComponent {
  labelContent?: string;
  description?: string;
  children?: React.ReactNode;
  required?: boolean;
  inputFor?: string;
}

const RellyShipLabel = ({
  labelContent,
  description,
  children,
  required,
  inputFor,
  extraClassName,
  ...props
}: IRellyShipLabelProps & HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={joinClass([
        "flex items-center justify-between pb-4",
        extraClassName ? extraClassName : ""
      ])}
      htmlFor={inputFor ? inputFor : undefined}
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
