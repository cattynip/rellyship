import IRellyShipComponent, { joinClass } from "./RellyShipComponent";

interface IRellyShipLabelProps extends IRellyShipComponent {
  labelContent: string;
  required?: boolean;
  inputFor?: string;
}

const RellyShipLabel = ({
  labelContent,
  required,
  inputFor,
  extraClassName
}: IRellyShipLabelProps) => {
  return (
    <label
      className={joinClass([
        "flex items-center justify-between",
        extraClassName ? extraClassName : ""
      ])}
      htmlFor={inputFor ? inputFor : undefined}
    >
      {labelContent}
      {required ? <span className="text-red-500">*</span> : null}
    </label>
  );
};

export default RellyShipLabel;
