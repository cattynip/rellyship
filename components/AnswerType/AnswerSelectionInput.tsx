import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TSelections } from "@pages/public-votes/open";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

library.add(faPlus);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface IAnswerSelectionInputProps {
  getContent: (inputContent: TSelections) => void;
}

const AnswerSelectionInput = ({ getContent }: IAnswerSelectionInputProps) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
    >
      <span>This is an input for selections</span>
    </motion.div>
  );
};

export default AnswerSelectionInput;
