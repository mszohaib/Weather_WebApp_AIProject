import React from "react";
export default function UnitToggle({ units, onchangeUnits }) {
  //Functions to come over here--To display the units over here

  //Function if the user pressed c^

  return (
    <div className="unitToggle">
      <h2>Current Unit: {units}</h2>
      <button onClick={() => onchangeUnits("metric")}>Button for C°</button>
      <button onClick={() => onchangeUnits("imperial")}>Button for F°</button>
    </div>
  );
}
