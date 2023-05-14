import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

// TODO: Make them dynamic import

import AnswerAmountInput from "@components/AnswerType/AnswerAmountInput";
import AnswerSelectionInput from "@components/AnswerType/AnswerSelectionInput";
import AnswerTypeTopBar from "@components/AnswerType/AnswerTypeTopBar";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import LabelSet from "@components/RellyShipComponents/RellyShipLabel";
import TagsSearcher from "@components/TagSearcher";
import InputSet from "@components/RellyShipComponents/RellyShipInput";
import { useForm } from "react-hook-form";
import ButtonSet from "@components/RellyShipComponents/RellyShipButton";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IVoteForm>({});

  // When it sends an API, the body part will include this variables, depend on the `active` variable.
  const [selections, setSelections] = useState<TSelections>([]);
  const [amount, setAmount] = useState<TAmount>({
    biggest: 100,
    smallest: 0,
    interval: 20,
    unit: "degress"
  });

  const [active, setActive] = useState<TVote>("answer");

  const onValid = (handedForm: IVoteForm) => {
    console.log(handedForm);

    // TODO: Check fields

    // TODO: Send an API
  };

  const onTopBarClick = (value: TVote) => {
    setActive(value);
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Open a Public Vote</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="border-t border-gray-399 mt-5 pt-5 space-y-4"
      >
        <div>
          <LabelSet.jsxFunction labelContent="Title" htmlFor="title" required />
          <InputSet.jsxFunction
            placeholder="How do you think about...?"
            id="title"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            isFormInput
            register={register("title", {
              required: {
                value: true,
                message: "The title is a required field."
              },
              minLength: {
                value: 3,
                message: "The title should be longer than 3 letters."
              },
              maxLength: {
                value: 40,
                message: "The title should be longer than 40 letters."
              }
            })}
          />
        </div>
        <div>
          <LabelSet.jsxFunction
            labelContent="Description"
            htmlFor="description"
          />
          <InputSet.jsxFunction
            placeholder="This vote is about..."
            id="description"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            isFormInput
            register={register("description", {
              required: {
                value: true,
                message: "The description is a required field."
              },
              minLength: {
                value: 3,
                message: "The description should be longer than 3 letters."
              },
              maxLength: {
                value: 40,
                message: "The description should be longer than 40 letters."
              }
            })}
          />
        </div>
        <div>
          <LabelSet.jsxFunction
            labelContent="Type of Answers"
            htmlFor="answertype"
            required
          />
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
                <AnswerAmountInput
                  getContent={content => {
                    setAmount(content);
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <LabelSet.jsxFunction labelContent="Tags" htmlFor="tags" />
          <TagsSearcher />
        </div>
        <div className="flex items-center justify-center pt-5">
          <ButtonSet.jsxFunction
            content="Open"
            mood="specially positive"
            loading={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default OpenPublicVote;
