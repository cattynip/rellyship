import joinClass from "@libs/client/joinClasses";
import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface IRellyShipComponent {
  extraClassName?: React.ComponentProps<"div">["className"];
}

export interface IRellyShipInputTypeComponent<T = HTMLInputElement>
  extends IRellyShipComponent,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {
  error?: boolean;
  wider?: boolean;
  narrow?: boolean;
  removeHoverAnimation?: boolean;
  link?: string;
  type?: HTMLInputTypeAttribute;
}

export { joinClass };

export default IRellyShipComponent;
