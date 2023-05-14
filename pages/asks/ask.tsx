import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

// TODO: Make them dynamic import

import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import LabelSet from "@components/RellyShipComponents/RellyShipLabel";
import InputSet from "@components/RellyShipComponents/RellyShipInput";
import { useForm } from "react-hook-form";
import ButtonSet from "@components/RellyShipComponents/RellyShipButton";

interface IAskForm {
  username?: string;
  tags?: string[];
  question?: string;
  content?: string;
  summary?: string;
}

const Ask: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IAskForm>({});

  const onValid = (handedForm: IAskForm) => {
    console.log(handedForm);

    // TODO: Cehck fields

    // TODO: Send an API
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Ask</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="border-t border-gray-400 mt-5 pt-5 space-y-4"
      >
        <div>
          <LabelSet.jsxFunction
            labelContent="Question"
            htmlFor="question"
            required
          />
          <InputSet.jsxFunction
            placeholder="My question is that..."
            id="question"
            removeHoverAnimation
            wider
            isFormInput
            minLength={3}
            maxLength={40}
            register={register("question", {
              required: {
                value: true,
                message: "The quetion is a reuqired field."
              },
              minLength: {
                value: 5,
                message: "The question should be longer then 5 letters."
              },
              maxLength: {
                value: 40,
                message: "The question should be shorter than 40 letters."
              }
            })}
          />
          {/* <AskEditor */}
          {/*   getContent={(content: string) => { */}
          {/*     console.log(content); */}
          {/*   }} */}
          {/*   getSummary={(summary: string) => { */}
          {/*     console.log(summary); */}
          {/*   }} */}
          {/* /> */}
        </div>
        <div>
          <LabelSet.jsxFunction labelContent="User" htmlFor="who" required />
          {/* <UserSearcher */}
          {/*   onChange={(event: ChangeEvent<HTMLInputElement>) => { */}
          {/*     // setFormData(prev => ({ */}
          {/*     //   ...prev, */}
          {/*     //   username: event.target.value */}
          {/*     // })) */}
          {/*     console.log(event); */}
          {/*   }} */}
          {/* /> */}
        </div>
        <div>
          <LabelSet.jsxFunction labelContent="Tags" htmlFor="tags" required />
          {/* <TagsSearcher */}
          {/*   getContent={(tags: string[]) => { */}
          {/*     console.log(tags); */}
          {/*     // setFormData(prev => ({ */}
          {/*     //   ...prev, */}
          {/*     //   tags: tags */}
          {/*     // })); */}
          {/*   }} */}
          {/* /> */}
        </div>
        <div className="flex items-center justify-center pt-6">
          <ButtonSet.jsxFunction
            content="Ask"
            mood="specially positive"
            loading={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default Ask;
