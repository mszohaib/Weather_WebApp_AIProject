import React from "react";

export default function ThemeToggle({ theme, handleThemeChange }) {
  const getButtonText = () => {
    return theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  };
  //This below will be the main return funcitions
  return (
    <div className="themeToggle">
      <h2>Current Theme is ➡️ {theme} </h2>
      <button onClick={() => handleThemeChange()}>{getButtonText()}</button>
    </div>
  );
}
