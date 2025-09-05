import React from "react";
export default function ErrorBanner({ errorMessage }) {
  // console.log("Component Check"); //To check if the component is working
  // console.log(`Error component rendered ..`, errorMessage); //To check if the Message is rendering from parentor props being recieving or not
  return errorMessage ? (
    <div className="error-box">There is an Error...,{errorMessage}</div>
  ) : (
    <p>No Error At the moment!</p>
  );
}
