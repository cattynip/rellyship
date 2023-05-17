import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TSelections } from "@pages/public-votes/open";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import RellyShipInput from "@components/RellyShipComponents/RellyShipInput";
import { ChangeEvent, FocusEvent, useEffect, useState } from "react";

library.add(faPlus);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface IAnswerSelectionInputProps {
  getContent: (inputContent: TSelections) => void;
}

const AnswerSelectionInput = ({ getContent }: IAnswerSelectionInputProps) => {
  const [selections, setSelections] = useState<TSelections>([]);

  useEffect(() => {
    getContent(selections);
  }, [selections]);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      className="space-y-3"
    >
      <div className="grid grid-cols0 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {selections.map((value, idx) => (
            <Selection
              key={idx}
              defaultValue={value}
              index={idx}
              getContent={(index: number, changedValue: string) => {
                let isSame = false;

                if (changedValue.toString() !== "") {
                  selections.map(value => {
                    if (value.toString() === changedValue.toString()) {
                      isSame = true;
                    }
                  });

                  if (!isSame) {
                    const returnedSelection = [
                      ...selections.slice(0, index),
                      changedValue,
                      ...selections.slice(index + 1)
                    ];

                    getContent(returnedSelection);
                    setSelections(returnedSelection);
                  }
                } else {
                  const returnedSelection = [...selections].splice(index, 1);

                  getContent(returnedSelection);
                  setSelections(returnedSelection);
                }
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      <SelectionInput
        getContent={(inputContent: string) => {
          let isSame = false;

          if (inputContent.toString() !== "") {
            selections.map(value => {
              if (value.toString() === inputContent.toString()) {
                isSame = true;
              }
            });

            if (!isSame) {
              getContent([...selections, inputContent]);
              setSelections([...selections, inputContent]);
            }
          }
        }}
      />
    </motion.div>
  );
};

interface ISelectionInputProps {
  getContent: (inputContent: string) => void;
}

const SelectionInput = ({ getContent }: ISelectionInputProps) => {
  const [inputContent, setInputContent] = useState<string>("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value.trim());
  };

  const onButtonClick = () => {
    getContent(inputContent);
  };

  return (
    <div className="relative">
      <RellyShipInput
        extraClassName="w-full"
        onChange={onInputChange}
        wider
        removeHoverAnimation
      />
      <div className="absolute top-0 right-0 mx-2 flex items-center justify-center h-full">
        <button
          onClick={onButtonClick}
          className="py-0.5 px-1.5 rounded-md bg-gray-700 border border-gray-600 transition-all hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={"plus"} />
        </button>
      </div>
    </div>
  );
};

interface ISelectionProps {
  getContent: (indx: number, changedValue: string) => void;
  defaultValue: string;
  index: number;
}

const Selection = ({ getContent, defaultValue, index }: ISelectionProps) => {
  const onInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    getContent(index, event.target.value.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 0.5
      }}
    >
      <RellyShipInput
        extraClassName="w-full"
        wider
        removeHoverAnimation
        defaultValue={defaultValue}
        onBlur={onInputBlur}
      />
    </motion.div>
  );
};

export default AnswerSelectionInput;
