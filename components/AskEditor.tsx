import { AnimatePresence } from "framer-motion";
import { HTMLAttributes, useState } from "react";
import IRellyShipComponent, {
  joinClass
} from "./RellyShipComponents/RellyShipComponent";
import { motion } from "framer-motion";
import RellyShipTextArea from "./RellyShipComponents/RellyShipTextArea";

interface IAskEditorProps extends IRellyShipComponent {}

type EditorModeType = "edit" | "preview" | "summary";

const AskEditor = ({}: IAskEditorProps) => {
  const [editorMode, setEditorMode] = useState<EditorModeType>("edit");

  return (
    <div className="border rounded-md mt-5 border-gray-700 transition-colors hover:border-white">
      <div>
        <ul className="flex items-center justify-start border-b border-b-gray-700">
          <AskEditorTab
            tabName="edit"
            active={editorMode}
            onClick={() => setEditorMode("edit")}
          />
          <AskEditorTab
            tabName="preview"
            active={editorMode}
            onClick={() => setEditorMode("preview")}
          />
          <AskEditorTab
            tabName="summary"
            active={editorMode}
            onClick={() => setEditorMode("summary")}
          />
        </ul>
      </div>
      <div>
        {editorMode === "edit" && <TextEditor />}
        {editorMode === "preview" && <Previewer />}
        {editorMode === "summary" && <Summary />}
      </div>
    </div>
  );
};

interface IAskEditorTabProps extends IRellyShipComponent {
  tabName: EditorModeType;
  active: EditorModeType;
}

const AskEditorTab = ({
  tabName,
  active,
  ...props
}: IAskEditorTabProps & HTMLAttributes<HTMLLIElement>) => {
  const isMatched = tabName === active;

  return (
    <li
      className={joinClass([
        "bg-transparent first:border-r first:border-r-gray-700 last:border-x last:border-x-gray-700 relative cursor-pointer"
      ])}
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
            "absolute top-0 left-0 w-full h-full bg-white backdrop-filter flex items-center justify-center",
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
    </li>
  );
};

export default AskEditor;
