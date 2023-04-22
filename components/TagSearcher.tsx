import { ChangeEvent, HTMLAttributes, MouseEvent, useState } from "react";
import RellyShipInput from "./RellyShipComponents/RellyShipInput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import RellyShipDescription from "./RellyShipComponents/RellyShipDescription";

library.add(faXmark);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface ITagsSearcherProps {
  fallback: () => void;
}

const TagsSearcher = ({ fallback }: ITagsSearcherProps) => {
  const [tags, setTags] = useState<string[]>([]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    if (currentValue.endsWith(" ")) {
      setTags(prev => [...prev, currentValue.trim()]);
      event.target.value = "";
    }
  };

  const onXMarkCilck = (event: MouseEvent<SVGSVGElement>) => {
    console.log(event.target);
  };

  return (
    <div className="border border-gray-500 transition-colors hover:border-white rounded-md pt-3 flex flex-col">
      <ul className="block px-3.5 pb-3.5">
        {tags.length !== 0 ? (
          tags.map(tag => (
            <TagComponent content={tag} key={tag} onClick={onXMarkCilck} />
          ))
        ) : (
          <RellyShipDescription description="Type the name of the tag and press space bar..." />
        )}
      </ul>
      <div>
        <RellyShipInput
          placeholder="#Tags"
          extraClassName="w-full rounded-none border-b-transparent border-x-transparent"
          wider
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

interface ITagComponentProps {
  content: string;
}

const TagComponent = ({
  content,
  ...props
}: ITagComponentProps & HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <li className="bg-blue-700 text-blue-300 w-min px-2 py-1 rounded-full flex items-center justify-start space-x-1 m-1 float-left">
      <div>
        <span>#</span>
        <span>{content}</span>
      </div>
      <FontAwesomeIcon
        icon={"xmark"}
        className="bg-blue-950 py-0.5 px-1 rounded-full cursor-pointer"
        {...props}
      />
    </li>
  );
};

export default TagsSearcher;
