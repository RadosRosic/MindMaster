import React from "react";

const Button = ({
  icon,
  color = "primary",
  disabled = false,
  shape = "square",
  text,
  onClick,
}) => {
  const txtColor = color === "secondary" ? "txt-light" : "txt-dark";

  return (
    <button
      className="pushable"
      disabled={disabled}
      onClick={onClick}
      value={icon}
    >
      <span className="shadow"></span>
      <span className={`edge edge-${color}`}></span>
      <span className={`front front-${color} ${shape}`}>
        <div className={`btn-content ${txtColor}`}>
          <span className={"btn-text"}>{text}</span>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </span>
    </button>
  );
};

export default Button;
