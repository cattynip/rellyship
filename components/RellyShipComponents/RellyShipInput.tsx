import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";
import { HTMLInputTypeAttribute } from "react";

interface IRellyShipInputProps extends IRellyShipInputTypeComponent {
  inputType?: HTMLInputTypeAttribute;
}

const RellyShipInput = ({
  placeholder,
  error,
  inputType,
  id,
  formRegister,
  wider,
  extraClassName,
  ...props
}: IRellyShipInputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  return (
    <input
      className={joinClass([
        "bg-transparent border rounded-md border-gray-700 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white",
        error ? "border-red-700 hover:border-red-700 focus:border-red-500" : "",
        wider ? "py-2" : "py-1",
        extraClassName ? extraClassName : ""
      ])}
      placeholder={placeholder}
      type={inputType ? inputType : "text"}
      id={id ? id : undefined}
      {...props}
      {...formRegister}
    />
  );
};

export default RellyShipInput;
