import IRellyShipComponent, {
  joinClass
} from "./RellyShipComponents/RellyShipComponent";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface IFloatingWindowProps extends IRellyShipComponent {
  message: string;
  children: React.ReactNode;
  translateYValue?: number;
}

const FloatingWindow = ({
  translateYValue = 0,
  message,
  children,
  extraClassName
}: IFloatingWindowProps) => {
  const [windowVisible, setWindowVisible] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => setWindowVisible(true)}
        onMouseLeave={() => setWindowVisible(false)}
      >
        {children}
      </div>

      <AnimatePresence>
        {windowVisible && (
          <motion.div
            className={joinClass([
              "bg-zinc-900 p-2 px-3 border shadow-gray-950 shadow-lg border-gray-800 rounded-lg absolute flex items-center justify-center max-w-md w-96 z-10",
              extraClassName ? extraClassName : ""
            ])}
            initial={{
              opacity: 0,
              y: -20 + translateYValue
            }}
            animate={{
              opacity: 1,
              y: translateYValue
            }}
            exit={{
              opacity: 0,
              y: 20 + translateYValue
            }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWindow;
