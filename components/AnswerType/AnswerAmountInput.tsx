import { library } from "@fortawesome/fontawesome-svg-core";
import { TAmount } from "@pages/public-votes/open";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import RellyShipLabel from "@components/RellyShipComponents/RellyShipLabel";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import RellyShipInput from "@components/RellyShipComponents/RellyShipInput";

library.add(faCaretDown);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface IAnswerAmountInput {
  getContent: (content: TAmount) => void;
}

const AnswerAmountInput = ({ getContent }: IAnswerAmountInput) => {
  const [amount, setAmount] = useState<TAmount>({
    biggest: 100,
    smallest: 0,
    interval: 20,
    unit: "Number of"
  });

  useEffect(() => {
    getContent(amount);
  }, [amount]);

  const checker = (content: string): number => {
    const cleanedContent = content.trim();

    if (cleanedContent.includes("e")) {
      return 500;
    }

    return Number(cleanedContent);
  };

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      className="space-y-4"
    >
      <div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-center pb-3">
            <RellyShipLabel
              htmlFor="min"
              labelContent="Min"
              narrower
              isUnbolded
            />
            <FontAwesomeIcon icon={"caret-down"} className="pt-0.5" />
          </div>
          <div className="flex flex-col items-end justify-center pb-3">
            <RellyShipLabel
              htmlFor="max"
              labelContent="Max"
              narrower
              isUnbolded
            />
            <FontAwesomeIcon icon={"caret-down"} className="pt-0.5" />
          </div>
        </div>
        <div className="w-full h-1 bg-blue-500 rounded-full" />
      </div>
      <div className="flex items-center justify-between">
        <RellyShipInput
          id="min"
          placeholder="1"
          type="number"
          removeHoverAnimation
          defaultValue={amount.smallest}
          extraClassName="w-32"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setAmount(prev => ({
              ...prev,
              smallest: checker(event.target.value)
            }))
          }
        />
        <RellyShipInput
          id="max"
          placeholder="20"
          type="number"
          removeHoverAnimation
          defaultValue={amount.biggest}
          extraClassName="w-32"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setAmount(prev => ({
              ...prev,
              biggest: checker(event.target.value)
            }))
          }
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <RellyShipLabel
            labelContent="Interval"
            htmlFor="interval"
            isUnbolded
            required
          />
          <RellyShipInput
            extraClassName="w-full"
            removeHoverAnimation
            id="interval"
            defaultValue={amount.interval}
            type="number"
            placeholder="20"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setAmount(prev => ({
                ...prev,
                interval: checker(event.target.value)
              }))
            }
          />
        </div>
        <div>
          <RellyShipLabel
            labelContent="Unit"
            htmlFor="unit"
            isUnbolded
            required
          />
          <RellyShipInput
            extraClassName="w-full"
            removeHoverAnimation
            defaultValue={amount.unit}
            id="unit"
            placeholder="The number of age"
            maxLength={20}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setAmount(prev => ({
                ...prev,
                unit: event.target.value.trim()
              }))
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AnswerAmountInput;
