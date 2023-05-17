import { useEffect, useState } from "react";
import { IRellyShipInputTypeComponent } from "./RellyShipComponents/RellyShipComponent";
import React from "react";

// TODO: Make them dynamic import

import Tab from "./AskEditor/tabs";
import Editor from "./AskEditor/editor";
import Previewer from "./AskEditor/previewer";
import { AnimatePresence } from "framer-motion";

interface IAskEditorProps extends IRellyShipInputTypeComponent {}

export type EditorModeType = "edit" | "preview" | "summary";

const AskEditor = ({ ...props }: IAskEditorProps) => {
  const [editorMode, setEditorMode] = useState<EditorModeType>("edit");
  const [content, setContent] = useState<string>("");

  return (
    <div className="border rounded-md mt-2.5 border-gray-700 hover:border-white transition-colors">
      <div>
        <ul className="flex items-center justify-start border-b border-b-gray-700">
          <Tab
            tabName="edit"
            active={editorMode}
            onClick={() => setEditorMode("edit")}
          />
          <Tab
            tabName="preview"
            active={editorMode}
            onClick={() => setEditorMode("preview")}
          />
        </ul>
      </div>
      <div>
        <AnimatePresence>
          {editorMode === "edit" && (
            <Editor defaultContent={content} {...props} />
          )}
          {editorMode === "preview" && <Previewer content={content} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AskEditor;
