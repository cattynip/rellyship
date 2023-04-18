import Link from "next/link";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";
import { HTMLAttributeAnchorTarget, HTMLAttributes } from "react";
import { UrlObject } from "url";

interface IRellyShipInputProps extends IRellyShipComponent {
  linkTo: string | UrlObject;
  target?: HTMLAttributeAnchorTarget;
  colorDecoration?: boolean;
  children: React.ReactNode;
}

const RellyShipAnchor = ({
  linkTo,
  colorDecoration,
  children,
  extraClassName,
  ...props
}: IRellyShipInputProps & HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={linkTo} passHref legacyBehavior {...props}>
      <a
        className={joinClass([
          "cursor-pointer",
          colorDecoration
            ? "text-purple-500 underline underline-offset-4 focus:underline-offset-1 hover:underline-offset-1 transition-all hover:text-purple-600 border border-transparent focus:border-white p-1 focus:outline-none"
            : "",
          extraClassName ? extraClassName : ""
        ])}
      >
        {children}
      </a>
    </Link>
  );
};

export default RellyShipAnchor;
