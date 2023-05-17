import type { NextPage } from "next";

// TODO: Make them dynamic import

import UserSearcher from "@components/UserSearcher";
import TagsSearcher from "@components/TagSearcher";
import AskEditor from "@components/AskEditor";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import RellyShipHeading from "@components/RellyShipComponents/RellyShipHeadings";
import RellyShipInput, {
  inputRegisterObj
} from "@components/RellyShipComponents/RellyShipInput";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";
import { useForm } from "react-hook-form";

interface IAskForm {
  question: string;
  content: string;
  username: string;
  tags: string[];
}

const Ask: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<IAskForm>({
    mode: "onSubmit",
    reValidateMode: "onBlur"
  });

  const onValid = (handedForm: IAskForm) => {
    console.log(handedForm);

    // TODO: Cehck fields

    // TODO: Send an API
  };

  return (
    <div>
      <RellyShipHeading text="Ask" extraClassName="text-3xl" />
      <form
        onSubmit={handleSubmit(onValid)}
        className="border-t border-gray-400 mt-5 pt-5 space-y-4"
      >
        <div>
          <RellyShipLabel labelContent="Question" htmlFor="question" required />
          <RellyShipInput
            placeholder="My question is that..."
            id="question"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            minLength={5}
            maxLength={40}
            register={register("question", inputRegisterObj("question"))}
          />
          <AskEditor
            register={register(
              "content",
              inputRegisterObj("content", { minLength: 5, maxLength: 300 })
            )}
          />
        </div>
        <div>
          <RellyShipLabel labelContent="User" htmlFor="who" required />
          <UserSearcher
            minLength={1}
            maxLength={10}
            register={register(
              "username",
              inputRegisterObj("username", { minLength: 1, maxLength: 10 })
            )}
          />
        </div>
        <div>
          <RellyShipLabel
            labelContent="Tags"
            htmlFor="tags"
            description="What tags would you like to tag on this ask?"
          />
          <TagsSearcher
            getContent={(tags: string[]) => setValue("tags", tags)}
          />
        </div>
        <div className="flex items-center justify-center pt-6">
          <RellyShipButton
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
