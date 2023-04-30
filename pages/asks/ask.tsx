import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// TODO: Make them dynamic import

import UserSearcher from "@components/UserSearcher";
import TagsSearcher from "@components/TagSearcher";
import AskEditor from "@components/AskEditor";
import FloatingWindow from "@components/FloatingWindow";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import RellyShipHeading from "@components/RellyShipComponents/RellyShipHeadings";
import RellyShipInput from "@components/RellyShipComponents/RellyShipInput";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";

interface IAskForm {
  username?: string;
  tags?: string[];
  question?: string;
  content?: string;
  summary?: string;
}

const Ask: NextPage = () => {
  const [formData, setFormData] = useState<IAskForm>({});
  const [loading, _setLoading] = useState<boolean>(false);

  const onValid = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Send an API
  };

  return (
    <div className="max-w-3xl mx-auto">
      <RellyShipHeading text="Ask" extraClassName="text-3xl" />
      <form
        onSubmit={onValid}
        className="border-t border-gray-400 mt-5 pt-5 space-y-4"
      >
        <div>
          <FloatingWindow message="Who do you want to ask to? Enter the user name. It will show you the information of the user.">
            <RellyShipLabel
              inputFor="who"
              required
              description="Who do you want to ask to?"
            >
              <div className="text-xl font-bold">
                <span className="pr-3">To</span>
                <span className="underline">@Who</span>
                <span>?</span>
              </div>
            </RellyShipLabel>
          </FloatingWindow>
          <UserSearcher
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData(prev => ({
                ...prev,
                username: event.target.value
              }))
            }
          />
        </div>
        <div>
          <FloatingWindow message="What tags do you want to attach? These tags will show this question to the list.">
            <RellyShipLabel
              inputFor="tags"
              description="What tags would you like to tag on this ask?"
            >
              <div className="text-xl font-bold">
                <span className="pr-3">With</span>
                <span className="underline">#Tags</span>
                <span>?</span>
              </div>
            </RellyShipLabel>
          </FloatingWindow>
          <TagsSearcher
            getContent={(tags: string[]) => {
              setFormData(prev => ({
                ...prev,
                tags: tags
              }));
            }}
          />
        </div>
        <div>
          <FloatingWindow message="This is a question that will be shown up as a representative question.">
            <RellyShipLabel
              inputFor="question"
              required
              description="How do you simplify your question?"
            >
              <div className="text-xl font-bold">
                <span>My question is...</span>
              </div>
            </RellyShipLabel>
          </FloatingWindow>
          <RellyShipInput
            placeholder="My question is that..."
            id="question"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData(prev => ({
                ...prev,
                question: event.target.value
              }))
            }
          />
          <AskEditor
            getContent={(content: string) =>
              setFormData(prev => ({ ...prev, content: content }))
            }
            getSummary={(summary: string) =>
              setFormData(prev => ({ ...prev, summary: summary }))
            }
          />
        </div>
        <div className="flex items-center justify-center pt-6">
          <RellyShipButton
            content="Ask"
            mood="specially positive"
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default Ask;
