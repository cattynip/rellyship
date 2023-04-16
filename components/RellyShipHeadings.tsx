import IRellyShipComponent, { joinClass } from "./RellyShipComponent";

interface IRellyShipHeadingOneProps extends IRellyShipComponent {
  text: string;
}

const RellyShipHeading = ({
  text,
  extraClassName
}: IRellyShipHeadingOneProps) => {
  return (
    <h1
      className={joinClass([
        "font-extrabold text-4xl",
        extraClassName ? extraClassName : ""
      ])}
    >
      {text}
    </h1>
  );
};

export default RellyShipHeading;
