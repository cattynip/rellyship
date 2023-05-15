import joinClass from "@libs/client/joinClasses";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IRellyShipComponent {
  extraClassName?: React.ComponentProps<"div">["className"];
}

export interface IRellyShipInputTypeComponent extends IRellyShipComponent {
  error?: boolean;
  wider?: boolean;
  narrower?: boolean;
  removeHoverAnimation?: boolean;
  register?: UseFormRegisterReturn;
}

export { joinClass };

export default IRellyShipComponent;
