import React, { useState } from "react";
import PropTypes from "prop-types";
import Steps from "./Steps";

/**
 * Implement the basic Wizard component so that it can accept some steps and react to
 * prev, next, and end actions from the steps.
 */

const Wizard = (props) => {
  const [step, setStep] = useState(0);

  const WizardAction = {
    prev: 1,
    next: 2,
    end: 3,
  };

  const onAction = (whichAction) => {
    switch (whichAction) {
      case WizardAction.prev: {
        if (step > 0) setStep(step - 1);
        break;
      }
      case WizardAction.next: {
        if (step < 4) setStep(step + 1);
        break;
      }
      case WizardAction.end: {
        console.log("end");
        break;
      }
      default: {
        console.log("This should not be happening");
      }
    }
  };

  return (
    <div>
      <Steps
        wizardContext={props.wizardContext}
        onAction={onAction}
        whichStep={step}
      />
    </div>
  );
};

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  //steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  //onComplete: PropTypes.func.isRequired,
};

export default Wizard;
