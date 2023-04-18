import { UseFormRegisterReturn } from "react-hook-form";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";
import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface IRellyShipInputProps extends IRellyShipComponent {
  placeholder: string;
  error?: boolean;
  inputType?: HTMLInputTypeAttribute;
  id?: string;
  formRegister?: UseFormRegisterReturn;
}

const RellyShipInput = ({
  placeholder,
  error,
  inputType,
  id,
  formRegister,
  extraClassName
}: IRellyShipInputProps & HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={joinClass([
        "bg-transparent border rounded-md border-gray-400 py-1 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white",
        error ? "border-red-700 hover:border-red-500 focus:border-red-500" : "",
        extraClassName ? extraClassName : ""
      ])}
      placeholder={placeholder}
      type={inputType ? inputType : "text"}
      id={id ? id : undefined}
      {...formRegister}
    />
  );
};

export default RellyShipInput;
