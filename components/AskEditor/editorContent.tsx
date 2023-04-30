import { motion } from "framer-motion";

interface IEditorContent {
  children: React.ReactNode;
}

const EditorContent = ({ children }: IEditorContent) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{
        bounce: 0.1,
        duration: 0.2
      }}
      className="py-3.5 px-5 min-h-[24px]"
    >
      {children}
    </motion.div>
  );
};

export default EditorContent;
