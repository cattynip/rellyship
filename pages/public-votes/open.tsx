import AnswerAmountInput from "@components/AnswerType/AnswerAmountInput";
import AnswerSelectionInput from "@components/AnswerType/AnswerSelectionInput";
import AnswerTypeTopBar from "@components/AnswerType/AnswerTypeTopBar";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import RellyShipHeading from "@components/RellyShipComponents/RellyShipHeadings";
import RellyShipInput from "@components/RellyShipComponents/RellyShipInput";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";
import TagsSearcher from "@components/TagSearcher";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

export type TVote = "answer" | "selection" | "amount";

export type TAnswer = any;
export type TSelections = string[];
export type TAmount = {
  biggest: number;
  smallest: number;
  interval: number;
  unit: string;
};

interface IVoteForm {
  title?: string;
  description?: string;
  type?: TVote;
  tags?: string[];
}

const OpenPublicVote: NextPage = () => {
  const [formData, setFormData] = useState<IVoteForm>({});

  // When it sends an API, the body part will include this part.
  const [selections, setSelections] = useState<TSelections>([]);
  const [amount, setAmount] = useState<TAmount>({
    biggest: 100,
    smallest: 0,
    interval: 20,
    unit: "degress"
  });

  const [loading, _setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<TVote>("selection");

  const onValid = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Check fields

    // TODO: Send an API
  };

  const onTopBarClick = (value: TVote) => {
    setActive(value);
  };

  return (
    <div>
      <button onClick={() => console.log(formData)}>
        Click to check the values
      </button>
      <RellyShipHeading text="Open a Public Vote" extraClassName="text-2xl" />
      <form
        onSubmit={onValid}
        className="border-t border-gray-399 mt-5 pt-5 space-y-4"
      >
        <div>
          <RellyShipLabel inputFor="title" required>
            <span className="text-xl font-bold">Title</span>
          </RellyShipLabel>
          <RellyShipInput
            placeholder="My question is that..."
            id="title"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData(prev => ({
                ...prev,
                title: event.target.value
              }))
            }
          />
        </div>
        <div>
          <RellyShipLabel inputFor="description">
            <span className="text-xl font-bold">Description</span>
          </RellyShipLabel>
          <RellyShipInput
            placeholder="This is a question..."
            id="description"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData(prev => ({
                ...prev,
                description: event.target.value
              }))
            }
          />
        </div>
        <div>
          <RellyShipLabel inputFor="answertype" required>
            <span className="text-xl font-bold">Answer Type</span>
          </RellyShipLabel>
          <div className="pb-1 pt-4 flex items-center justify-around">
            <AnswerTypeTopBar
              content="answer"
              active={active}
              onClick={() => onTopBarClick("answer")}
            />
            <AnswerTypeTopBar
              content="selection"
              active={active}
              onClick={() => onTopBarClick("selection")}
            />
            <AnswerTypeTopBar
              content="amount"
              active={active}
              onClick={() => onTopBarClick("amount")}
            />
          </div>
          <div className="pt-4">
            <AnimatePresence>
              {active === "selection" && (
                <AnswerSelectionInput
                  getContent={(selections: TSelections) => {
                    setSelections(selections);
                  }}
                />
              )}
              {active === "amount" && (
                <AnswerAmountInput getContent={() => {}} />
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <RellyShipLabel inputFor="tags">
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
        <div className="flex items-center justify-center pt-5">
          <RellyShipButton
            content="Open"
            mood="specially positive"
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default OpenPublicVote;
