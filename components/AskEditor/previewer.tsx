import RellyShipDescription from "@components/RellyShipComponents/RellyShipDescription";

// TODO: Make them dynamic imports

import Codeblock from "@components/RellyShipMarkdown/Codeblocks";
import Heading from "@components/RellyShipMarkdown/Headings";
import Ol from "@components/RellyShipMarkdown/Ols";
import Ul from "@components/RellyShipMarkdown/Uls";
import Markdown from "markdown-to-jsx";
import Summary from "./summary";
import Quote from "@components/RellyShipMarkdown/Quote";
import Strong from "@components/RellyShipMarkdown/Strong";
import Anchor from "@components/RellyShipMarkdown/Anchor";
import EditorContent from "./editorContent";

interface IPreviewerProps {
  content: string;
}

const Previewer = ({ content }: IPreviewerProps) => {
  return (
    <EditorContent>
      <div className="rounded-b-md block">
        {content === "" && (
          <RellyShipDescription description="Write something..." />
        )}
        <Markdown
          options={{
            overrides: {
              h1: {
                component: Heading,
                props: {
                  heading: "h1"
                }
              },
              h2: {
                component: Heading,
                props: {
                  heading: "h2"
                }
              },
              h3: {
                component: Heading,
                props: {
                  heading: "h3"
                }
              },
              h4: {
                component: Heading,
                props: {
                  heading: "h4"
                }
              },
              h5: {
                component: Heading,
                props: {
                  heading: "h5"
                }
              },
              h6: {
                component: Heading,
                props: {
                  heading: "h6"
                }
              },
              a: {
                component: Anchor
              },
              ul: {
                component: Ul
              },
              ol: {
                component: Ol
              },
              pre: {
                component: Codeblock
              },
              details: {
                component: Summary
              },
              blockquote: {
                component: Quote
              },
              em: {
                component: Strong
              },
              strong: {
                component: Strong
              }
            }
          }}
        >
          {content}
        </Markdown>
      </div>
    </EditorContent>
  );
};

export default Previewer;
