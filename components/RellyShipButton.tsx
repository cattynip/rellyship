import IRellyShipComponent, { joinClass } from "./RellyShipComponent";

type ButtonMoodType =
  | "normal"
  | "positive"
  | "specially positive"
  | "negative"
  | "specially negative";

type ButtonContentSuggestions =
  | "CANCEL"
  | "SUBMIT"
  | "ADD"
  | "DELETE"
  | "REMOVE";

export interface IRellyShipButtonProps extends IRellyShipComponent {
  content: string;
  mood: ButtonMoodType;
  id?: string;
  fallback?: (id: string) => void;
}

const RellyShipButton = ({
  content,
  mood,
  extraClassName
}: IRellyShipButtonProps) => {
  return (
    <button
      className={joinClass([
        "p-2 px-3 focus:outline-none rounded-sm transition-all border",
        mood === "normal"
          ? "border-gray-400 bg-black focus:bg-white focus:text-black focus:border-white hover:border-white"
          : mood === "positive"
          ? "border-green-900 bg-green-700 focus:bg-green-500 focus:border-white hover:border-white"
          : mood === "specially positive"
          ? "border-green-900 bg-gradient-to-br from-green-500 to-green-900 hover:border-white hover:bg-gradient-to-bl hover:from-green-900 hover:to-green-500 focus:from-green-900 focus:to-green-900 focus:border-white font-semibold"
          : mood === "negative"
          ? "border-red-900 bg-red-700 focus:bg-red-500 focus:border-white hover:border-white"
          : mood === "specially negative"
          ? "border-red-900 bg-gradient-to-br from-red-500 to-red-900 hover:border-white hover:bg-gradient-to-bl hover:from-red-900 hover:to-red-500 focus:from-red-900 focus:to-red-900 focus:border-white font-semibold"
          : "",
        extraClassName ? extraClassName : ""
      ])}
    >
      {content}
    </button>
  );
};

export default RellyShipButton;
