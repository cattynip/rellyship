import IBasicClassName from "@libs/client/manageClasses";
import { joinClass } from "./RellyShipComponent";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const InputSet: IBasicClassName<
  {
    removeHoverAnimation?: boolean;
    error?: boolean;
    wider?: boolean;
    isFormInput?: boolean;
    isSearchInput?: boolean;
  },
  {
    register?: UseFormRegisterReturn;
    errorMessage?: string;
  } & InputHTMLAttributes<HTMLInputElement>
> = {
  className:
    "bg-transparent border-2 rounded-md border-gray-700 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white",
  returnFunction({
    removeHoverAnimation,
    error,
    wider,
    isFormInput,
    isSearchInput
  }) {
    return joinClass([
      "bg-transparent border-2 rounded-md border-gray-700 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white",
      removeHoverAnimation ? "" : "hover:border-white",
      error ? "border-red-700 hover:border-red-700 focus:border-red-500" : "",
      wider ? "py-2" : "py-1",
      isFormInput ? "w-full" : "",
      isSearchInput
        ? "border-gray-600 w-[150px] focus:lg:w-[260px] focus:md:w-[400px]"
        : ""
    ]);
  },
  jsxFunction({
    removeHoverAnimation,
    error,
    wider,
    isFormInput,
    isSearchInput,
    register,
    errorMessage,
    ...props
  }) {
    return (
      <input
        className={joinClass([
          "bg-transparent border-2 rounded-md border-gray-700 placeholder:text-sm px-3 transition-all placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white",
          removeHoverAnimation ? "" : "hover:border-white",
          error
            ? "border-red-700 hover:border-red-700 focus:border-red-500"
            : "",
          wider ? "py-2" : "py-1",
          isFormInput ? "w-full" : "",
          isSearchInput
            ? "border-gray-600 w-[150px] focus:lg:w-[260px] focus:md:w-[400px]"
            : ""
        ])}
        {...register}
        {...props}
      />
    );
  }
};

export default InputSet;
