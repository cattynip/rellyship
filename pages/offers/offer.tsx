import AskEditor from "@components/AskEditor";
import RellyShipButton from "@components/RellyShipComponents/RellyShipButton";
import RellyShipHeading from "@components/RellyShipComponents/RellyShipHeadings";
import RellyShipInput from "@components/RellyShipComponents/RellyShipInput";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";
import TagsSearcher from "@components/TagSearcher";
import UserSearcher from "@components/UserSearcher";
import { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

const CreateOffer: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onValid = (event: FormEvent) => {
    console.log(event);
  };

  return (
    <div>
      <RellyShipHeading text="Make an Offer" extraClassName="text-2xl" />
      <form
        onSubmit={onValid}
        className="border-t border-gray-399 mt-5 pt-5 space-y-4"
      >
        <div>
          <RellyShipLabel link="question" required>
            <span className="text-xl font-bold">Offer</span>
          </RellyShipLabel>
          <RellyShipInput
            // TODO: Replace `@` to the username
            placeholder="This is an offer from @"
            id="question"
            extraClassName="w-full"
            removeHoverAnimation
            wider
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => console.log(event)
              // setFormData(prev => ({
              //   ...prev,
              //   question: event.target.value
              // }))
            }
          />
          <AskEditor
            getContent={
              (content: string) => console.log(content)
              // setFormData(prev => ({ ...prev, content: content }))
            }
            getSummary={
              (summary: string) => console.log(summary)
              // setFormData(prev => ({ ...prev, summary: summary }))
            }
          />
        </div>
        <div>
          {/* TODO: the user can search the user, who has a popular crown(the yellow one) */}
          <RellyShipLabel link="who" required>
            <span className="text-xl font-bold">User</span>
          </RellyShipLabel>
          <UserSearcher
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => console.log(event)
              // setFormData(prev => ({
              //   ...prev,
              //   username: event.target.value
              // }))
            }
          />
        </div>

        <div>
          <RellyShipLabel link="tags">
            <span className="text-xl font-bold">Tags</span>
          </RellyShipLabel>
          <TagsSearcher
            getContent={(tags: string[]) => {
              // setFormData(prev => ({
              //   ...prev,
              //   tags: tags
              // }));
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

export default CreateOffer;
