import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
  useEffect,
  useRef,
  useState
} from "react";
import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";

interface IRellyShipTextAreaProps extends IRellyShipInputTypeComponent {
  autoScrollControl?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
}

const RellyShipTextArea = ({
  placeholder,
  error,
  id,
  autoScrollControl,
  rows,
  cols,
  wider,
  narrow,
  onChange,
  formRegister,
  extraClassName,
  ...props
}: IRellyShipTextAreaProps & HTMLAttributes<HTMLTextAreaElement>) => {
  const [textAreaHeight, setTextAreaHeight] = useState<string>("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight(event.target.scrollHeight + "px");

    console.log(textAreaHeight);

    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    setTextAreaHeight(textareaRef.current?.scrollHeight + "px");
  }, []);

  return (
    <textarea
      className={joinClass([
        "bg-transparent border rounded-md border-gray-400 placeholder:text-sm transition-colors placeholder:opacity-1 placeholder:focus:opacity-0 focus:outline-none focus:border-white hover:border-white w-full",
        error ? "border-red-700 hover:border-red-500 focus:border-red-500" : "",
        extraClassName ? extraClassName : "",
        narrow ? "p-0" : "px-3 pt-3 pb-2.5"
      ])}
      placeholder={placeholder}
      id={id ? id : undefined}
      rows={rows ? rows : 1}
      cols={cols ? cols : 10}
      ref={textareaRef}
      onChange={handleTextAreaChange}
      style={{
        height: textAreaHeight
      }}
      {...formRegister}
      {...props}
    />
  );
};

export default RellyShipTextArea;
