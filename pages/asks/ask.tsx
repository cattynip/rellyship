import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  username: string;
  tags?: string[];
  question: string;
  content: string;
  summary?: string;
}

const Ask: NextPage = () => {
  const [loading, _setLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<IAskForm>();

  watch();

  const onValid = (askForm: IAskForm) => {
    console.log(askForm);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <RellyShipHeading text="Ask" extraClassName="text-3xl" />
      <form
        onSubmit={handleSubmit(onValid)}
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
            error={false}
            formRegister={register("username", {
              required: {
                value: true,
                message:
                  "You have to put the name of the user that you want to ask to."
              }
            })}
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
          <TagsSearcher fallback={() => {}} />
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
            formRegister={register("question", {
              required: {
                value: true,
                message: "You have to put a question."
              }
            })}
            wider
          />
          <AskEditor
            formRegister={register("content", {
              required: {
                value: true,
                message: "You have to put a content."
              }
            })}
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
