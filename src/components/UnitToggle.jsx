import React from "react";
export default function UnitToggle({ units, onchangeUnits }) {
  //Functions to come over here--To display the units over here

  //Function if the user pressed c^

  return (
    <div className="unitToggle">
      <h2>Units will be shown here!:- {units}</h2>
      <button onClick={() => onchangeUnits("Metric")}>Button for C^</button>
      <button onClick={() => onchangeUnits("Imperial")}>Button for F^</button>
      <p>Text area for the search bar</p>
    </div>
  );
}
