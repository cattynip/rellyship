import AskEditor from "@components/AskEditor";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import RellyShipHeading from "@components/RellyShipComponents/RellyShipHeadings";
import RellyShipInput, {
  inputRegisterObj
} from "@components/RellyShipComponents/RellyShipInput";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";
import TagsSearcher from "@components/TagSearcher";
import UserSearcher from "@components/UserSearcher";
import { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

interface IOfferForm {
  question: string;
  content: string;
  username: string;
  tags: string[];
}

const CreateOffer: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<IOfferForm>({
    mode: "onSubmit",
    reValidateMode: "onBlur"
  });

  const onValid = (handedForm: IOfferForm) => {
    console.log(handedForm);
  };

  return (
    <div>
      <RellyShipHeading text="Make an Offer" extraClassName="text-2xl" />
      <form
        onSubmit={handleSubmit(onValid)}
        className="border-t border-gray-399 mt-5 pt-5 space-y-4"
      >
        <div>
          <RellyShipLabel labelContent="Offer" htmlFor="question" required />
          <RellyShipInput
            // TODO: Replace `@` to the username
            placeholder="This is an offer from @"
            id="question"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            register={register("question", inputRegisterObj("question"))}
          />
          <AskEditor />
        </div>
        <div>
          {/* TODO: the user can search the user, who has a popular crown(the yellow one) */}
          <RellyShipLabel labelContent="User" htmlFor="who" required />
          <UserSearcher
            register={register(
              "username",
              inputRegisterObj("username", { minLength: 1, maxLength: 10 })
            )}
          />
        </div>

        <div>
          <RellyShipLabel labelContent="Tags" htmlFor="tags">
            <span className="text-xl font-bold">Tags</span>
          </RellyShipLabel>
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

export default CreateOffer;
