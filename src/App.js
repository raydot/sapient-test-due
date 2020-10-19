import React from "react";
import "./App.css";

// import Wizard from "./core/components/wizard/Wizard";
import ShippingLabelMaker from "./features/shipping-label-maker/ShippingLabelMaker";

function App() {
  return (
    <div className='App'>
      <ShippingLabelMaker />
    </div>
  );
}

export default App;
