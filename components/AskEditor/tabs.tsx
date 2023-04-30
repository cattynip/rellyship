import { EditorModeType } from "@components/AskEditor";
import IRellyShipComponent, {
  joinClass
} from "@components/RellyShipComponents/RellyShipComponent";
import { HTMLAttributes, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IAskEditorTabProps extends IRellyShipComponent {
  tabName: EditorModeType;
  active: EditorModeType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Tab = ({
  tabName,
  active,
  onClick,
  ...props
}: IAskEditorTabProps & HTMLAttributes<HTMLButtonElement>) => {
  const isMatched = tabName === active;

  return (
    <li className="first:border-r first:border-r-gray-700 last:border-x last:border-x-gray-700">
      <button
        className={joinClass(["bg-transparent relative cursor-pointer"])}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();

          if (onClick) {
            onClick(event);
          }
        }}
        {...props}
      >
        <div className="p-3">
          <span className="hover:-translate-y-2">
            {tabName === "edit"
              ? "Editor"
              : tabName === "preview"
              ? "Previewer"
              : "Summary"}
          </span>
        </div>

        {isMatched && (
          <motion.div
            transition={{
              duration: 0.25
            }}
            layoutId="editorTab"
            className={joinClass([
              "absolute top-0 left-0 w-full h-full z-0 bg-white backdrop-filter flex items-center justify-center",
              tabName === "edit" ? "rounded-l-md" : ""
            ])}
          >
            <AnimatePresence>
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
                {tabName === "edit"
                  ? "Editor"
                  : tabName === "preview"
                  ? "Previewer"
                  : "Summary"}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </button>
    </li>
  );
};

export default Tab;
