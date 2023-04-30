import RellyShipTextArea from "@components/RellyShipComponents/RellyShipTextArea";
import EditorContent from "./editorContent";
import { IRellyShipInputTypeComponent } from "@components/RellyShipComponents/RellyShipComponent";
import { ChangeEvent } from "react";

interface ITextEditorProps extends IRellyShipInputTypeComponent {
  content: string;
  saveContent: (ctx: string) => void;
}

const Editor = ({ content, saveContent }: ITextEditorProps) => {
  return (
    <EditorContent>
      <div className="flex">
        <RellyShipTextArea
          defaultValue={content}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            saveContent(event.currentTarget.value);
          }}
          extraClassName="border-none m-0"
          narrow
        />
      </div>
    </EditorContent>
  );
};

export default Editor;
