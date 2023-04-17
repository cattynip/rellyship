import { NextPage } from "next";
import RellyShipHeading from "@components/RellyShipHeadings";
import RellyShipDescription from "@components/RellyShipDescription";
import RellyShipInput from "@components/RellyShipInput";
import RellyShipLabel from "@components/RellyShipLabel";
import RellyShipTestLayout from "@components/layouts/RellyShipTestLayout";
import RellyShipAnchor from "@components/RellyShipAnchor";
import RellyShipModal from "@components/RellyShipModal";
import { useState } from "react";
import RellyShipButton from "@components/RellyShipButton";

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
