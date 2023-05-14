import IBasicClassName from "@libs/client/manageClasses";
import React, { AnchorHTMLAttributes } from "react";
import { joinClass } from "./RellyShipComponent";
import Link, { LinkProps } from "next/link";

const AnchorSet: IBasicClassName<
  { colorDecoration?: boolean },
  { children: React.ReactNode } & LinkProps
> = {
  className: "cursor-pointer",
  returnFunction({ colorDecoration }) {
    return joinClass([
      "cursor-pointer",
      colorDecoration
        ? "text-purple-400 underline underline-offset-4 focus:underline-offset-1 hover:underline-offset-1 transition-all hover:text-purple-500 border border-transparent focus:border-white p-1 focus:outline-none"
        : ""
    ]);
  },
  jsxFunction({ colorDecoration, children, ...props }) {
    return (
      <Link passHref legacyBehavior {...props}>
        <a
          className={joinClass([
            "cursor-pointer",
            colorDecoration
              ? "text-purple-400 underline underline-offset-4 focus:underline-offset-1 hover:underline-offset-1 transition-all hover:text-purple-500 border border-transparent focus:border-white p-1 focus:outline-none"
              : ""
          ])}
        >
          {children}
        </a>
      </Link>
    );
  }
};

export default AnchorSet;
