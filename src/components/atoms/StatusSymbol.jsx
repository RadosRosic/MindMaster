import React from "react";

const StatusSymbol = ({ icon }) => {
  return (
    <span
      className={`material-symbols-outlined status-symbol status-symbol-${icon}`}
    >
      {icon}
    </span>
  );
};

export default StatusSymbol;
