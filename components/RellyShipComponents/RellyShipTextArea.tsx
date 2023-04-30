import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";

interface IRellyShipTextAreaProps extends IRellyShipInputTypeComponent {
  rows?: number;
  cols?: number;
}

const RellyShipTextArea = ({
  placeholder,
  error,
  id,
  rows,
  cols,
  formRegister,
  extraClassName
}: IRellyShipTextAreaProps) => {
  return (
    <textarea
      className={joinClass([
        "bg-transparent border rounded-md border-gray-400 pt-3 pb-2.5 placeholder:text-sm px-3 transition-colors placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white w-full",
        error ? "border-red-700 hover:border-red-500 focus:border-red-500" : "",
        extraClassName ? extraClassName : ""
      ])}
      placeholder={placeholder}
      id={id ? id : undefined}
      {...formRegister}
      rows={rows ? rows : 1}
      cols={cols ? cols : 10}
    />
  );
};

export default RellyShipTextArea;
