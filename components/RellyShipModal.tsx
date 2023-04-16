import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import RellyShipButton, { IRellyShipButtonProps } from "./RellyShipButton";
import IRellyShipComponent, { joinClass } from "./RellyShipComponent";
import { exit } from "process";

interface IRellyShipModalProps extends IRellyShipComponent {
  title: string;
  showingVar: boolean;
  cancelBtn?: boolean;
  fallback: () => void;
  buttons: IRellyShipButtonProps[];
  children: React.ReactNode;
}

const RellyShipModal = ({
  title,
  showingVar,
  cancelBtn,
  fallback,
  buttons,
  children,
  extraClassName
}: IRellyShipModalProps) => {
  return (
    <AnimatePresence>
      {showingVar && (
        <div className="absolute top-0 left-0 w-full h-full pt-44 px-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.65 }}
            className="w-full max-w-2xl shadow-black shadow-xl mx-auto backdrop-blur-sm bg-black border border-gray-400 rounded-lg py-2"
          >
            <div className="flex items-center justify-between border-b border-b-white px-4 pb-2">
              <h3 className="text-center text-white font-bold text-2xl">
                {title}
              </h3>
              {cancelBtn ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  size="xl"
                  className="cursor-pointer"
                  onClick={() => fallback()}
                />
              ) : null}
            </div>
            <div
              className={joinClass([
                "px-4 pt-2",
                extraClassName ? extraClassName : ""
              ])}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RellyShipModal;
