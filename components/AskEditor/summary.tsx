import EditorContent from "./editorContent";

interface ISummaryProps {
  content: string;
}

const Summary = ({ content }: ISummaryProps) => {
  // TODO: Implement Summary using CHAT GPT
  return (
    <EditorContent>
      <p>{content}</p>
    </EditorContent>
  );
};

export default Summary;
