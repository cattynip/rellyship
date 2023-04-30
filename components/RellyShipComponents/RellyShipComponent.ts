import joinClass from "@libs/client/joinClasses";
import { HTMLAttributes } from "react";

interface IRellyShipComponent {
  extraClassName?: string;
}

export interface IRellyShipInputTypeComponent
  extends IRellyShipComponent,
    HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  wider?: boolean;
  narrow?: boolean;
  removeHoverAnimation?: boolean;
}

export { joinClass };

export default IRellyShipComponent;
