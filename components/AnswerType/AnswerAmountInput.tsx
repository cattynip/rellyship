import { library } from "@fortawesome/fontawesome-svg-core";
import { TAmount } from "@pages/public-votes/open";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

library.add();

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface IAnswerAmountInput {
  getContent: (content: TAmount) => void;
}

const AnswerAmountInput = ({ getContent }: IAnswerAmountInput) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
    >
      <span>This is an input for amount</span>
    </motion.div>
  );
};

export default AnswerAmountInput;
