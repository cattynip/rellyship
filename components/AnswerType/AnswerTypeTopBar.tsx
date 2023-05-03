import { TVote } from "@pages/public-votes/open";
import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes, useState } from "react";

interface IAnswerTypeTopBar {
  content: TVote;
  active: TVote;
}

const AnswerTypeTopBar = ({
  content,
  active,
  ...props
}: IAnswerTypeTopBar & HTMLAttributes<HTMLButtonElement>) => {
  const isMatched = content === active;

  return (
    <button className="relative py-2 px-2" {...props}>
      <span>
        {content === "answer"
          ? "Answers"
          : content === "selection"
          ? "Selections"
          : "Amounts"}
      </span>

      <AnimatePresence>
        {isMatched && (
          <motion.div
            transition={{
              duration: 0.25
            }}
            layoutId="answertypetopbar"
            className="bg-white w-full h-full absolute top-0 left-0 rounded-lg flex items-center justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.15,
                type: "spring",
                bounce: 0.5,
                mass: 0.7,
                delay: 0.1
              }}
              className="text-black"
            >
              {content === "answer"
                ? "Answers"
                : content === "selection"
                ? "Selections"
                : "Amounts"}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AnswerTypeTopBar;
