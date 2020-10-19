import React, { useState } from "react";
import Wizard from "../../core/components/wizard/Wizard";

import Step01 from "./s01GetSenderAddress";
//import Header from "./Header";

// This component's job is to pass in some info and get back a shipping label.

// Wizard Prop Types
// header: PropTypes.func.isRequired,
// steps: PropTypes.array.isRequired,
// wizardContext: PropTypes.object.isRequired,
// onComplete: PropTypes.func.isRequired,

function header() {
  console.log("jup aro");
}

const ShippingLabelMaker = () => {
  const shippingInfoTemplate = {
    from: {
      name: null,
      street: null,
      city: null,
      state: null,
      zip: null,
    },
    to: {
      name: null,
      street: null,
      city: null,
      state: null,
      zip: null,
    },
    weight: 0,
    shippingOption: 0,
  };

  const [shippingInfo, setShippingInfo] = useState(shippingInfoTemplate);

  const [steps, setSteps] = useState([Step01]);

  const onComplete = () => {};

  return (
    <div>
      <Wizard
        //header={header}
        //steps={steps}
        wizardContext={shippingInfo}
        //onComplete={onComplete}
      />
    </div>
  );
};

export default ShippingLabelMaker;
