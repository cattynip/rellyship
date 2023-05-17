import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { MouseEvent, useState } from "react";

// TODO: Make them dynamic import

import AnswerAmountInput from "@components/AnswerType/AnswerAmountInput";
import AnswerSelectionInput from "@components/AnswerType/AnswerSelectionInput";
import AnswerTypeTopBar from "@components/AnswerType/AnswerTypeTopBar";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import RellyShipHeading from "@components/RellyShipComponents/RellyShipHeadings";
import RellyShipInput, {
  inputRegisterObj
} from "@components/RellyShipComponents/RellyShipInput";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";
import TagsSearcher from "@components/TagSearcher";
import { useForm } from "react-hook-form";

export type TVote = "answer" | "selection" | "amount";

export type TAnswer = any;
export type TSelections = string[];
export type TAmount = {
  biggest: number;
  smallest: number;
  interval: number;
  unit: string;
};
export type TAnswerSheet = TSelections | TAmount;

interface IVoteForm {
  title: string;
  description: string;
  answerType: TVote;
  answerSheet: TAnswerSheet;
  tags: string[];
}

const OpenPublicVote: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<IVoteForm>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: { answerType: "answer" }
  });

  // When it sends an API, the body part will include these variables, depend on the `active` variable.
  const [_selections, setSelections] = useState<TSelections>([]);
  const [_amount, setAmount] = useState<TAmount>({
    biggest: 100,
    smallest: 0,
    interval: 20,
    unit: "degrees"
  });

  const [active, setActive] = useState<TVote>("answer");

  const onValid = (handedForm: IVoteForm) => {
    console.log(handedForm);

    // TODO: Add answers || selections || amount answer sheet to the object.

    // TODO: Check fields

    // TODO: Send an API
  };

  const onTopBarClick = (value: TVote) => {
    setActive(value);
  };

  return (
    <div>
      <RellyShipHeading text="Open a Public Vote" extraClassName="text-2xl" />
      <form
        onSubmit={handleSubmit(onValid)}
        className="border-t border-gray-399 mt-5 pt-5 space-y-4"
      >
        <div>
          <RellyShipLabel labelContent="Title" htmlFor="title" required />
          <RellyShipInput
            placeholder="My question is that..."
            id="title"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            register={register("title", inputRegisterObj("title"))}
          />
        </div>
        <div>
          <RellyShipLabel labelContent="Description" htmlFor="description" />
          <RellyShipInput
            placeholder="This is a question..."
            id="description"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            register={register(
              "description",
              inputRegisterObj(
                "description",
                { minLength: 1, maxLength: 60 },
                { required: false }
              )
            )}
          />
        </div>
        <div>
          <RellyShipLabel labelContent="Type of Answers" required />
          <div className="pb-1 pt-4 flex items-center justify-around">
            <AnswerTypeTopBar
              content="answer"
              active={active}
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                onTopBarClick("answer");
                setValue("answerType", "answer");
              }}
            />
            <AnswerTypeTopBar
              content="selection"
              active={active}
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                onTopBarClick("selection");
                setValue("answerType", "selection");
              }}
            />
            <AnswerTypeTopBar
              content="amount"
              active={active}
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                onTopBarClick("amount");
                setValue("answerType", "amount");
              }}
            />
          </div>
          <div className="pt-4">
            <AnimatePresence>
              {active === "selection" && (
                <AnswerSelectionInput
                  getContent={(selections: TSelections) => {
                    setSelections(selections);
                    setValue("answerSheet", selections);
                  }}
                />
              )}
              {active === "amount" && (
                <AnswerAmountInput
                  getContent={(content: TAmount) => {
                    setAmount(content);
                    setValue("answerSheet", content);
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <RellyShipLabel labelContent="Tags" htmlFor="tags" />
          <TagsSearcher
            getContent={(tags: string[]) => setValue("tags", tags)}
          />
        </div>
        <div className="flex items-center justify-center pt-5">
          <RellyShipButton
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
