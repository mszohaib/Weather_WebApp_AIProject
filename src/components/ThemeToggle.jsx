import React from "react";

export default function ThemeToggle({ theme, handleThemeChange }) {
  const getButtonText = () => {
    if (theme === "light") {
      return "Switch to DarkMode";
    } else {
      return "Switch to LightMode";
    }
  };

  return (
    <div>
      <h2>The current Theme is:-{theme} </h2>
      <button onClick={() => handleThemeChange()}>{getButtonText()}</button>
    </div>
  );
}
