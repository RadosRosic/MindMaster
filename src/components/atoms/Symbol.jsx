import React from "react";

const Symbol = ({ icon }) => {
  let color;
  switch (icon) {
    case "security":
    case "castle":
      color = "cool";
      break;
    case "swords":
    case "flag":
      color = "warm";
      break;
    case "sports_bar":
    case "menu_book":
      color = "warmer";
      break;
    default:
      color = "cool";
  }

  return (
    <div className={`symbol symbol-bg-${color}`}>
      <span className="material-symbols-outlined prevent-text-highlight">
        {icon}
      </span>
    </div>
  );
};

export default Symbol;
