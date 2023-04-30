import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IRellyShipInputTypeComponent, joinClass } from "./RellyShipComponent";

interface IRellyShipTextAreaProps
  extends IRellyShipInputTypeComponent<HTMLTextAreaElement> {
  autoScrollControl?: boolean;
}

const RellyShipTextArea = ({
  placeholder,
  error,
  id,
  autoScrollControl,
  wider,
  narrow,
  onChange,
  extraClassName,
  ...props
}: IRellyShipTextAreaProps) => {
  const [textAreaHeight, setTextAreaHeight] = useState<string>("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight(event.target.scrollHeight + "px");

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
      ref={textareaRef}
      onChange={handleTextAreaChange}
      style={{
        height: textAreaHeight
      }}
      {...props}
    />
  );
};

export default RellyShipTextArea;
