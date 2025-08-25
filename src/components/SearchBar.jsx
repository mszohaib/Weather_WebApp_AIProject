import React from "react";

export default function SearchBar({ handleSearch }) {
  const [inputValue, setInputValue] = React.useState(""); //Will hold whatever the user will be typing

  //This will tre
  const triggerSearch = () => {
    const value = inputValue.trim();
    if (!value) return;
    handleSearch(value); //This makes the value pass in the app(component) in order to pass there and
  }; //Function to trigger the search
  //Should log the values when typed in the input browser
  const handleInputChange = (event) => {
    console.log("User typed;-", event.target.value);
    setInputValue(event.target.value);
  }; //logs every value in the console and in the state

  //Function when the user presses enter it should move generate triggersearch function
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      triggerSearch();
    } else return;
  };

  return (
    <div className="card">
      <label>Label for the city</label>
      <input
        value={inputValue}
        type="text"
        placeholder="karachi-(city name)"
        onChange={handleInputChange} //Should update the value in the state
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={triggerSearch}>Search</button>
    </div>
  );
}
