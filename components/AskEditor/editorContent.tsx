interface IEditorContent {
  children: React.ReactNode;
}

const EditorContent = ({ children }: IEditorContent) => {
  return <div className="py-3.5 px-5 min-h-[24px]">{children}</div>;
};

export default EditorContent;
