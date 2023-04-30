import { HTMLAttributes } from "react";
import IRellyShipComponent, {
  joinClass
} from "./RellyShipComponents/RellyShipComponent";

interface IUserAtProps extends IRellyShipComponent {}

const UserAt = ({
  extraClassName,
  ...props
}: IUserAtProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={joinClass([
        "text-2xl underline cursor-help",
        extraClassName ? extraClassName : ""
      ])}
      {...props}
    >
      @
    </span>
  );
};

export default UserAt;
