import { RegisterOptions } from "react-hook-form";
import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";
import { InputHTMLAttributes } from "react";

interface IRellyShipInputProps extends IRellyShipInputTypeComponent {}

export const inputRegisterObj = (
  fieldName: string,
  overrideDefaultValue?: {
    minLength?: number;
    maxLength?: number;
  },
  override?: RegisterOptions
): RegisterOptions => ({
  required: {
    value: true,
    message: `The ${fieldName} is a required field.`
  },
  minLength: {
    value: overrideDefaultValue?.minLength ? overrideDefaultValue.minLength : 5,
    message: `The ${fieldName} should be longer than ${
      overrideDefaultValue?.minLength ? overrideDefaultValue.minLength : 5
    } letters.`
  },
  maxLength: {
    value: overrideDefaultValue?.maxLength
      ? overrideDefaultValue.maxLength
      : 40,
    message: `The ${fieldName} should be shorter than ${
      overrideDefaultValue?.maxLength ? overrideDefaultValue.maxLength : 40
    } letters.`
  },
  ...override
});

const RellyShipInput = ({
  error,
  wider,
  narrower: narrow,
  removeHoverAnimation,
  register,
  extraClassName,
  ...props
}: IRellyShipInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={joinClass([
        "bg-transparent border-2 rounded-md border-gray-700 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white",
        removeHoverAnimation ? "" : "hover:border-white",
        error ? "border-red-700 hover:border-red-700 focus:border-red-500" : "",
        wider ? "py-2" : "py-1",
        extraClassName ? extraClassName : ""
      ])}
      {...register}
      {...props}
    />
  );
};

export default RellyShipInput;
