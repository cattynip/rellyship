import RellyShipTextArea from "@components/RellyShipComponents/RellyShipTextArea";
import EditorContent from "./editorContent";
import { IRellyShipInputTypeComponent } from "@components/RellyShipComponents/RellyShipComponent";
import { ChangeEvent } from "react";

interface ITextEditorProps extends IRellyShipInputTypeComponent {
  defaultContent: string;
}

const Editor = ({ defaultContent, ...props }: ITextEditorProps) => {
  return (
    <EditorContent>
      <div className="flex">
        <RellyShipTextArea
          defaultValue={defaultContent}
          extraClassName="border-none m-0"
          narrower
          {...props}
        />
      </div>
    </EditorContent>
  );
};

export default Editor;
