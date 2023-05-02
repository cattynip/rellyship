import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// TODO: Make them dynamic import

import UserSearcher from "@components/UserSearcher";
import TagsSearcher from "@components/TagSearcher";
import AskEditor from "@components/AskEditor";
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

    // TODO: Cehck fields

    // TODO: Send an API
  };

  return (
    <div>
      <RellyShipHeading text="Ask" extraClassName="text-3xl" />
      <form
        onSubmit={onValid}
        className="border-t border-gray-400 mt-5 pt-5 space-y-4"
      >
        <div>
          <RellyShipLabel inputFor="who" required>
            <span className="text-xl font-bold">User</span>
          </RellyShipLabel>
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
          <RellyShipLabel inputFor="question" required>
            <span className="text-xl font-bold">Question</span>
          </RellyShipLabel>
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
        <div>
          <RellyShipLabel
            inputFor="tags"
            description="What tags would you like to tag on this ask?"
          >
            <span className="text-xl font-bold">Tags</span>
          </RellyShipLabel>
          <TagsSearcher
            getContent={(tags: string[]) => {
              setFormData(prev => ({
                ...prev,
                tags: tags
              }));
            }}
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
