import RellyShipTextArea from "@components/RellyShipComponents/RellyShipTextArea";
import EditorContent from "./editorContent";

interface ITextEditorProps {
  defaultValue: string;
  saveContent: (ctx: string) => void;
}

const Editor = ({ defaultValue, saveContent }: ITextEditorProps) => {
  return (
    <EditorContent>
      <div className="flex">
        <RellyShipTextArea
          defaultValue={defaultValue}
          onChange={event => saveContent(event.currentTarget.value)}
          extraClassName="border-none m-0 pt-0 pb-0 pl-0 pr-0"
        />
      </div>
    </EditorContent>
  );
};

export default Editor;
