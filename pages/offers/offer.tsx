import AskEditor from "@components/AskEditor";
import ButtonSet from "@components/RellyShipComponents/RellyShipButton";
import InputSet from "@components/RellyShipComponents/RellyShipInput";
import LabelSet from "@components/RellyShipComponents/RellyShipLabel";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface IOfferForm {
  username?: string;
  tags?: string[];
  question?: string;
  content?: string;
  summary?: string;
}

const CreateOffer: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IOfferForm>({});

  const onValid = (handedForm: IOfferForm) => {
    console.log(event);
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Make an Offer</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="border-t border-gray-399 mt-5 pt-5 space-y-4"
      >
        <div>
          <LabelSet.jsxFunction
            labelContent="Offer"
            htmlFor="question"
            required
          />
          <InputSet.jsxFunction
            // TODO: Replace `@` to the username
            placeholder="This is an offer from..."
            id="question"
            removeHoverAnimation
            wider
            isFormInput
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
          {/*   getContent={ */}
          {/*     (content: string) => console.log(content) */}
          {/*     // setFormData(prev => ({ ...prev, content: content })) */}
          {/*   } */}
          {/*   getSummary={ */}
          {/*     (summary: string) => console.log(summary) */}
          {/*     // setFormData(prev => ({ ...prev, summary: summary })) */}
          {/*   } */}
          {/* /> */}
        </div>
        <div>
          <LabelSet.jsxFunction labelContent="User" htmlFor="who" required />
          {/* TODO: the user can search the user, who has a popular crown(the yellow one) */}
          {/* <UserSearcher */}
          {/*   onChange={ */}
          {/*     (event: ChangeEvent<HTMLInputElement>) => console.log(event) */}
          {/*     // setFormData(prev => ({ */}
          {/*     //   ...prev, */}
          {/*     //   username: event.target.value */}
          {/*     // })) */}
          {/*   } */}
          {/* /> */}
        </div>
        <div>
          <LabelSet.jsxFunction labelContent="Tags" htmlFor="tags" required />
          {/* <TagsSearcher */}
          {/*   getContent={(tags: string[]) => { */}
          {/* setFormData(prev => ({ */}
          {/*   ...prev, */}
          {/*   tags: tags */}
          {/* })); */}
          {/*   }} */}
          {/* /> */}
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

export default CreateOffer;
