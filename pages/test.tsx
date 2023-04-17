import { NextPage } from "next";
import RellyShipHeading from "@rellyship/RellyShipHeadings";
import RellyShipDescription from "@rellyship/RellyShipDescription";
import RellyShipInput from "@rellyship/RellyShipInput";
import RellyShipLabel from "@rellyship/RellyShipLabel";
import RellyShipTestLayout from "@components/layouts/RellyShipTestLayout";
import RellyShipAnchor from "@rellyship/RellyShipAnchor";
import RellyShipModal from "@rellyship/RellyShipModal";
import RellyShipButton from "@rellyship/RellyShipButton";
import { useState } from "react";

const TestPage: NextPage = () => {
  const [modalShowing, setModalShowing] = useState<boolean>(false);

  return (
    <RellyShipTestLayout>
      <div>
        <RellyShipModal
          title="This is a modal window"
          showingVar={modalShowing}
          cancelBtn
          fallback={() => setModalShowing(false)}
        >
          <p>Helllo World</p>
        </RellyShipModal>
      </div>
      <div>
        <RellyShipHeading text="This is a test page of rellyship" />
        <RellyShipDescription description="This is a description of RellyShipDescription component" />
        <RellyShipInput placeholder="Hello Wrold" inputType="text" />
        <RellyShipInput placeholder="Hello Wrold" inputType="number" />
        <RellyShipInput placeholder="This is an error input" error />
        <RellyShipInput placeholder="This is an error input" error />
        <RellyShipLabel
          labelContent="This label is linked to the below input"
          required
          inputFor="hw"
        />
        <RellyShipInput placeholder="Click the above label" id="hw" />
        <RellyShipAnchor
          linkTo={{ pathname: "/about", query: { why: "ehekdcpdho" } }}
        >
          THis is a about link that has a query that has the value of ehekdcpdho
        </RellyShipAnchor>
        <p>Do you want to see some modal window?</p>
        <a className="cursor-pointer" onClick={() => setModalShowing(true)}>
          Click Here
        </a>
        <RellyShipButton content="CANCEL" mood="normal" />
        <RellyShipButton content="SUBMIT" mood="positive" />
        <RellyShipButton content="SUBMIT" mood="specially positive" />
        <RellyShipButton content="DELETE" mood="negative" />
        <RellyShipButton content="DELETE" mood="specially negative" />
      </div>
    </RellyShipTestLayout>
  );
};

export default TestPage;
