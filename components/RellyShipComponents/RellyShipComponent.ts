import joinClass from "@libs/client/joinClasses";
import { HTMLAttributes } from "react";

interface IRellyShipComponent {
  extraClassName?: string;
}

export interface IRellyShipInputTypeComponent<T = HTMLInputElement>
  extends IRellyShipComponent,
    HTMLAttributes<T> {
  error?: boolean;
  wider?: boolean;
  narrow?: boolean;
  removeHoverAnimation?: boolean;
}

export { joinClass };

export default IRellyShipComponent;
