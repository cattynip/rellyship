import {
  ChangeEvent,
  HTMLAttributes,
  MouseEvent,
  useEffect,
  useState
} from "react";
import RellyShipInput from "./RellyShipComponents/RellyShipInput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import RellyShipDescription from "./RellyShipComponents/RellyShipDescription";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

library.add(faXmark);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface ITagsSearcherProps {
  getContent: (tags: string[]) => void;
}

const TagsSearcher = ({ getContent }: ITagsSearcherProps) => {
  const [tags, setTags] = useState<string[]>([]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;

    if (targetValue.endsWith(" ")) {
      // TODO: Add the checker(regex) for the special letter, such as !, @, #, $, %, ^, &, *, (, ), ;, :, ., ,, ', ", `, ~

      const currentValue = targetValue.trim();

      if (currentValue === "") {
        event.target.value = "";
        return;
      }

      const isSame = tags.find(tagValue => {
        if (currentValue.toString() === tagValue.toString()) {
          return true;
        } else {
          return false;
        }
      });

      if (currentValue.includes("-") || currentValue.includes("@") || isSame) {
        event.target.value = "";
        return;
      } else {
        setTags(prev => [...prev, currentValue.trim()]);
        event.target.value = "";
        return;
      }
    }
  };

  useEffect(() => {
    getContent(tags);
  }, [tags]);

  const onXMarkCilck = async (event: MouseEvent<SVGSVGElement>) => {
    const currentValue =
      event.currentTarget.parentElement?.children[0].children[1].textContent;

    setTags(prev =>
      prev.filter(tag => {
        if (tag === currentValue) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div className="border border-gray-700 rounded-md pt-3 flex flex-col">
      <ul className="block px-3 pb-3">
        <AnimatePresence mode="sync">
          {tags.length !== 0 ? (
            tags.map((tag, tagIdx) => (
              <TagComponent content={tag} key={tagIdx} onClick={onXMarkCilck} />
            ))
          ) : (
            <RellyShipDescription description="Type the name of the tag and press space bar..." />
          )}
        </AnimatePresence>
      </ul>
      <div>
        <RellyShipInput
          placeholder="#Tags"
          extraClassName="w-full rounded-none "
          wider
          removeHoverAnimation
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
    <div>
      <motion.li
        className="bg-blue-700 text-blue-300 w-min px-2 py-1 rounded-full flex items-center justify-start space-x-1 m-1 float-left"
        initial={{
          y: -20,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
      >
        <div>
          <span>#</span>
          <span>{content}</span>
        </div>
        <FontAwesomeIcon
          icon={"xmark"}
          className="bg-blue-950 py-0.5 px-1 rounded-full cursor-pointer"
          {...props}
        />
      </motion.li>
    </div>
  );
};

export default TagsSearcher;
