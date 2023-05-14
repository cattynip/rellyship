import IBasicClassName from "@libs/client/manageClasses";
import { joinClass } from "./RellyShipComponents/RellyShipComponent";
import AnchorSet from "./RellyShipComponents/RellyShipAnchor";

const HeaderElementSet: IBasicClassName<
  {},
  { linkTo?: string; text?: string; children?: React.ReactNode }
> = {
  className:
    "flex items-center justify-start mx-4 cursor-pointer hover:-translate-y-0.5 rounded-md h-min text-gray-400 transition-all hover:text-white text-md",
  returnFunction({ extraClassName }) {
    return joinClass([
      "flex items-center justify-start mx-4 cursor-pointer hover:-translate-y-0.5 rounded-md h-min text-gray-400 transition-all hover:text-white text-md",
      extraClassName ? extraClassName : ""
    ]);
  },
  jsxFunction({ linkTo, text, children, extraClassName }) {
    return (
      <div
        className={joinClass([
          "flex items-center justify-start mx-4 cursor-pointer hover:-translate-y-0.5 rounded-md h-min text-gray-400 transition-all hover:text-white text-md",
          extraClassName ? extraClassName : ""
        ])}
      >
        {linkTo ? (
          <AnchorSet.jsxFunction href={linkTo} extraClassName="px-4 py-3">
            {text ? <span>{text}</span> : children}
          </AnchorSet.jsxFunction>
        ) : (
          <>{text ? <span>{text}</span> : children}</>
        )}
      </div>
    );
  }
};

export default HeaderElementSet;
