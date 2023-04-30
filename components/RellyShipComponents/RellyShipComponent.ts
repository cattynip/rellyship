import joinClass from "@libs/client/joinClasses";
import { UseFormRegisterReturn } from "react-hook-form";

interface IRellyShipComponent {
  extraClassName?: string;
}

export interface IRellyShipInputTypeComponent extends IRellyShipComponent {
  placeholder?: string;
  error?: boolean;
  id?: string;
  formRegister?: UseFormRegisterReturn;
  wider?: boolean;
}

export { joinClass };

export default IRellyShipComponent;
