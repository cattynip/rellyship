import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";

interface IRellyShipInputProps extends IRellyShipInputTypeComponent {}

const RellyShipInput = ({
  error,
  wider,
  narrow,
  removeHoverAnimation = false,
  link,
  extraClassName,
  type,
  ...props
}: IRellyShipInputProps) => {
  return (
    <input
      className={joinClass([
        "bg-transparent border-2 rounded-md border-gray-700 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white",
        removeHoverAnimation ? "" : "hover:border-white",
        error ? "border-red-700 hover:border-red-700 focus:border-red-500" : "",
        wider ? "py-2" : "py-1",
        extraClassName ? extraClassName : ""
      ])}
      id={link ? link : ""}
      type={type ? type : "text"}
      {...props}
    />
  );
};

export default RellyShipInput;
