import React from "react";

const StatusSymbol = ({ icon, utilityClass }) => {
  return (
    <span
      className={`material-symbols-outlined status-symbol status-symbol-${icon} ${utilityClass} prevent-text-highlight`}
    >
      {icon}
    </span>
  );
};

export default StatusSymbol;
