import IRellyShipComponent, { joinClass } from "./RellyShipComponent";

interface IRellyShipDescriptionProps extends IRellyShipComponent {
  description: string;
}

const RellyShipDescription = ({
  description,
  extraClassName
}: IRellyShipDescriptionProps) => {
  return (
    <p
      className={joinClass([
        "text-sm text-gray-400 transition-colors hover:text-white cursor-default",
        extraClassName ? extraClassName : ""
      ])}
    >
      {description}
    </p>
  );
};

export default RellyShipDescription;
