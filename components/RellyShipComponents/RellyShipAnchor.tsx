import Link, { LinkProps } from "next/link";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";

interface IRellyShipInputProps extends IRellyShipComponent {
  colorDecoration?: boolean;
  children: React.ReactNode;
}

const RellyShipAnchor = ({
  colorDecoration,
  children,
  extraClassName,
  ...props
}: IRellyShipInputProps & LinkProps) => {
  return (
    <Link passHref legacyBehavior {...props}>
      <a
        className={joinClass([
          "cursor-pointer",
          colorDecoration
            ? "text-purple-400 underline underline-offset-4 focus:underline-offset-1 hover:underline-offset-1 transition-all hover:text-purple-500 border border-transparent focus:border-white p-1 focus:outline-none"
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
