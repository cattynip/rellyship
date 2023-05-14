import IBasicClassName, { TExtraTypes } from "@libs/client/manageClasses";
import { ButtonHTMLAttributes } from "react";
import { joinClass } from "./RellyShipComponent";
import { AnimatePresence, motion } from "framer-motion";

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

const ButtonSet: IBasicClassName<
  { mood: ButtonMoodType },
  {
    content: ButtonContentSuggestions | string;
    loading?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = {
  className:
    "p-1 px-4 w-20 focus:outline-none rounded-md transition-all border overflow-hidden flex items-center justify-center",
  returnFunction({ mood, extraClassName }) {
    return joinClass([
      "p-1 px-4 w-20 focus:outline-none rounded-md transition-all border overflow-hidden flex items-center justify-center",
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
    ]);
  },
  jsxFunction({ mood, extraClassName, content, loading }) {
    return (
      <button
        className={joinClass([
          "p-1 px-4 w-20 focus:outline-none rounded-md transition-all border overflow-hidden flex items-center justify-center",
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
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                rotateZ: 360,
                opacity: 1
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 0.2
              }}
              className="w-6 h-6 border-t border-l border-whtie rounded-full"
            ></motion.div>
          )}
        </AnimatePresence>
        {!loading && <span>{content}</span>}
      </button>
    );
  }
};

export default ButtonSet;
