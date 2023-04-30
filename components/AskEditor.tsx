import { useEffect, useState } from "react";
import IRellyShipComponent, {
  IRellyShipInputTypeComponent
} from "./RellyShipComponents/RellyShipComponent";
import React from "react";

// TODO: Make them dynamic import

import Tab from "./AskEditor/tabs";
import Editor from "./AskEditor/editor";
import Previewer from "./AskEditor/previewer";
import Summary from "./AskEditor/summary";
import { UseFormRegisterReturn } from "react-hook-form";

interface IAskEditorProps extends IRellyShipInputTypeComponent {
  formRegister: UseFormRegisterReturn;
}

export type EditorModeType = "edit" | "preview" | "summary";

const AskEditor = ({ formRegister }: IAskEditorProps) => {
  const [editorMode, setEditorMode] = useState<EditorModeType>("edit");
  const [content, setContent] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const saveContent = (content: string) => {
    setContent(content);
  };

  return (
    <div className="border rounded-md mt-2.5 border-gray-700 transition-colors hover:border-white">
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
          <Tab
            tabName="summary"
            active={editorMode}
            onClick={() => setEditorMode("summary")}
          />
        </ul>
      </div>
      <div>
        {editorMode === "edit" && (
          <Editor content={content} saveContent={saveContent} />
        )}
        {editorMode === "preview" && <Previewer content={content} />}
        {editorMode === "summary" && <Summary content={content} />}
      </div>
    </div>
  );
};

export default AskEditor;
