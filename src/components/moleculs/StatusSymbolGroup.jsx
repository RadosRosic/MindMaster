import React from "react";
import StatusSymbol from "../atoms/StatusSymbol";

const StatusSymbolGroup = ({ statusSymbolArr }) => {
  return (
    <div className="status-symbol-group">
      {statusSymbolArr?.map((statusSymbol, i) => (
        <StatusSymbol icon={statusSymbol} key={`${statusSymbol}${i}`} />
      ))}
    </div>
  );
};

export default StatusSymbolGroup;
